import { Shopify } from "@commerce-club/types"
import { Fields, UserError } from "types/graphql"

export const TOPICS = Object.keys(Shopify.EventTopic)

type EventEndpoint = {
  arn: string
}

type Event = {
  id: string
  topic: string
  format: "JSON" | "XML"
  endpoint: EventEndpoint
}

export type GetInput = {
  first: number
}

export type AddInput = {
  topic: string
  webhookSubscription: EventEndpoint & Pick<Event, "format">
}

export type GetResult = {
  webhookSubscriptions: Fields<Event>
}

export type AddResult = {
  eventBridgeWebhookSubscriptionCreate: {
    webhookSubscription: Pick<Event, "id">
    userErrors: UserError[]
  }
}
