/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useMemo } from "react"
import { useSelector } from "react-redux"
import { NextPage } from "next"
import moment from "moment"
import { Button, Card, EmptyState, Heading } from "@shopify/polaris"
import { Upsell } from "@commerce-club/types"

import { AppLayout, Label, Spinner, Table } from "components"
import { RootStore } from "store/entities"

import styles from "./Upsells.styles"

export const Upsells: NextPage = () => {
  const { data: upsells, fetching } = useSelector<RootStore, RootStore["upsells"]>((store) => store.upsells)

  const handleNewUpsellPage = useCallback(() => { }, [])
  const handleRowClick = useCallback(
    (index: number) => {
      const upsell = upsells[index]
      console.log(upsell)
    },
    [upsells],
  )

  const rows = useMemo(
    () =>
      upsells.map((item) => [
        <Heading>{item.name}</Heading>,
        <Label.Status value={item.status} active labels={{ [Upsell.Status.PAUSE]: "Paused" }} />,
        moment(item.updatedAt).format("MMMM D, YYYY"),
        moment(item.createdAt).format("MMMM D, YYYY"),
      ]),
    [upsells],
  )
  if (!rows.length && !fetching) {
    return (
      <EmptyState
        heading="Manage your upsells"
        action={{ content: "Add new Upsell", onAction: handleNewUpsellPage }}
        image="https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
      >
        <p>Increase your sales</p>
      </EmptyState>
    )
  }
  return (
    <AppLayout
      headerAction={
        <Button primary onClick={handleNewUpsellPage}>
          New Upsell
        </Button>
      }
    >
      <Card sectioned>
        <div css={styles.toppanel.root}>
          <div className="Polaris-TextContainer" css={styles.toppanel.label.root}>
            <p css={styles.toppanel.label.text}>Showing {upsells.length} offers</p>
          </div>
        </div>
        <hr />
        <Table
          classes={{ root: styles.table }}
          columnContentTypes={["text", "numeric", "text", "text"]}
          headings={["Name", "Status", "Last edited", "Created on"]}
          rows={rows}
          onRowClick={handleRowClick}
        />
        {fetching && <Spinner />}
      </Card>
    </AppLayout>
  )
}
