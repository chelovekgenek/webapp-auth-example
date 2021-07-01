import "isomorphic-fetch"
import next from "next"
import Koa from "koa"
import Router from "koa-router";
import Shopify from '@shopify/shopify-api';
import shopifyAuth, { verifyRequest } from '@shopify/koa-shopify-auth';

import config from "./config"
import {
  getNextHandler,
  getIndexHandler,
  handleGraphql,
  handlerAfterOfflineTokenAuth,
  handlerAfterOnlineTokenAuth,
  handleSign
} from "./middlewares";

const bodyparser = require("koa-bodyparser-graphql")

const app = next({ dev: process.env.NODE_ENV !== "production" })

app.prepare().then(() => {
  const server = new Koa()
  const router = new Router();
  server.keys = [Shopify.Context.API_SECRET_KEY];


  const handleIndex = getIndexHandler(app)
  const handleRequest = getNextHandler(app)

  router.get("/", handleIndex);
  router.post("/graphql", verifyRequest({ accessMode: "online" }), handleGraphql);
  router.post("/sign", verifyRequest({ accessMode: "online" }), handleSign);
  router.get("(/fonts/.*)", handleRequest);
  router.get("(/_next/static/.*)", handleRequest);
  router.get("/_next/webpack-hmr", handleRequest);
  router.get("(.*)", verifyRequest({ accessMode: 'online', authRoute: '/auth', fallbackRoute: '/install/auth' }), handleRequest)

  server.use(bodyparser())
  server.use(
    shopifyAuth({
      accessMode: "offline",
      prefix: "/install",
      afterAuth: handlerAfterOfflineTokenAuth
    })
  );
  server.use(
    shopifyAuth({
      accessMode: "online",
      afterAuth: handlerAfterOnlineTokenAuth,
    })
  );
  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(config.PORT, () => {
    console.log(`> Ready on http://localhost:${config.PORT}`)
  })
})
