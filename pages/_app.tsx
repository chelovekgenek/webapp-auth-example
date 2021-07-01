import "@shopify/polaris/dist/styles.css"
import React from "react"
import Head from "next/head"
import App, { AppContext, AppInitialProps } from "next/app"
import { Global } from "@emotion/react"
import { END } from "redux-saga"
import { AppProvider as PolarisProvider } from "@shopify/polaris"
import enTranslations from "@shopify/polaris/locales/en.json"

import { SagaStore, wrapper } from "store"
import { AppAction } from "store/entities"
import { ClientRouter } from "components/ClientRouter/ClientRouter"
import { GqlProvider, BridgeProvider } from "components"
import styles from "components/App.styles"
import { Storage } from "helpers/storage"

class MyApp extends App<AppInitialProps & { host: string, shop: string }> {
  public static getInitialProps = async ({ Component, ctx }: AppContext) => {
    await Storage.init({ shop: ctx.query.shop as string, host: ctx.query.host as string })
    if (ctx.store) ctx.store.dispatch(AppAction.init())

    const pageProps = {
      ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
    }

    if (ctx.req) {
      ctx.store.dispatch(END)
      await (ctx.store as SagaStore).sagaTask.toPromise()
    }

    return {
      pageProps,
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <Head>
          <title>Plus One</title>
          <meta charSet="utf-8" />
          <link rel="preload" href="/fonts/SFProText/SFProText-Regular.ttf" as="font" crossOrigin="" />
        </Head>
        <BridgeProvider>
          <ClientRouter />
          <Global styles={styles.global} />
          <PolarisProvider i18n={enTranslations}>
            <GqlProvider>
              <Component {...pageProps} />
            </GqlProvider>
          </PolarisProvider>
        </BridgeProvider>
      </React.Fragment>
    )
  }
}

export default wrapper.withRedux(MyApp)
