import Koa from "koa"
import Router from "koa-router"
import NextServer from "next/dist/next-server/server/next-server"
import loadCurrentSession from "@shopify/shopify-api/dist/utils/load-current-session"
import { ApiVersion } from "@shopify/shopify-api"
import Axios from "axios"

import { SignFacade } from "./sign.facade"
import config from "./config"

const AUTHENTICATED_SHOPS: Record<string, string> = {}
const signFacade = new SignFacade(config.API_HOST)

export const getNextHandler = (nextApp: NextServer): Router.IMiddleware => {
  const handle = nextApp.getRequestHandler()
  return async (ctx): Promise<void> => {
    await handle(ctx.req, ctx.res)
    console.log(ctx.body)
    ctx.respond = false
    ctx.res.statusCode = 200

    return
  }
}

export const getIndexHandler = (nextApp: NextServer): Router.IMiddleware => {
  const handleRequest = getNextHandler(nextApp)
  return async (ctx, next) => {
    const shop = String(ctx.query.shop);

    const session = await loadCurrentSession(ctx.req, ctx.res)

    if (!session) {
      ctx.redirect(`/install/auth?shop=${shop}`);
    } else {
      await handleRequest(ctx, next);
    }
  }
}

export const handlerAfterOfflineTokenAuth = async (ctx: Koa.Context) => {
  const { shop, accessToken } = ctx.state.shopify;
  AUTHENTICATED_SHOPS[shop] = accessToken

  console.log("offline session", ctx.state.shopify)
  
  ctx.redirect(`/auth?shop=${shop}`);
}

export const handlerAfterOnlineTokenAuth = async (ctx: Koa.Context) => {
  const { shop } = ctx.state.shopify;

  console.log("online session", ctx.state.shopify)

  ctx.redirect(`/?host=${ctx.query.host}&shop=${shop}`);
}

export const handleSign: Router.IMiddleware = async (ctx) => {
  const session = await loadCurrentSession(ctx.req, ctx.res)
  if (!session) return
  const token = await signFacade.sign({ shop: session.shop, token: AUTHENTICATED_SHOPS[session.shop] })

  ctx.status = 200
  ctx.body = token
}

export const handleGraphql: Router.IMiddleware = async (ctx) => {
  const session = await loadCurrentSession(ctx.req, ctx.res)
  const instance = Axios.create({
    baseURL: `https://${session?.shop}/admin/api/${ApiVersion.October20}`,
    headers: { "X-Shopify-Access-Token": session?.accessToken, "Content-Type": "application/json" },
  })
  const { data: { data },
  } = await instance.post<{ data: object }>("/graphql.json", ctx.request.body)

  ctx.status = 200
  ctx.body = data
}
