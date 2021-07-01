import gql from "graphql-tag"

export const GET_EVENTS = gql`
  query getEvents($first: Int) {
    webhookSubscriptions(first: $first) {
      edges {
        node {
          id
          format
          topic
          endpoint {
            ... on WebhookEventBridgeEndpoint {
              arn
            }
          }
        }
      }
    }
  }
`

export const ADD_EVENTS = gql`
  mutation eventBridgeWebhookSubscriptionCreate(
    $topic: WebhookSubscriptionTopic!
    $webhookSubscription: EventBridgeWebhookSubscriptionInput!
  ) {
    eventBridgeWebhookSubscriptionCreate(topic: $topic, webhookSubscription: $webhookSubscription) {
      webhookSubscription {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`
