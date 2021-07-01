/** @jsx jsx */
import { jsx } from "@emotion/react"
import React from "react"
import { useSelector } from "react-redux"
import Head from "next/head"
import { Page } from "@shopify/polaris"
import { Billing } from "@commerce-club/types"

import { useEventsSubscription, useScriptTag } from "helpers/hooks"
import { StoreSelector } from "store/entities"

import { Props } from "./AppLayout.types"
import { Header } from "./Header"
import { Message } from "./Message"
import Views from "./Views"

export const AppLayout = ({ children, title = "Dashboard", headerAction, classes = {} }: Props) => {
  useScriptTag()
  useEventsSubscription()

  const billing = useSelector(StoreSelector.getBilling)

  return (
    <React.Fragment>
      <Header action={headerAction} />
      {billing === Billing.Version.v1 && <Views />}
      <Message />
      <Page>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main css={classes.main}>{children}</main>
      </Page>
    </React.Fragment>
  )
}
