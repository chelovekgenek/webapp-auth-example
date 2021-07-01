import gql from "graphql-tag"

export const CURRENT_INSTALLATION = gql`
  query {
    currentAppInstallation {
      allSubscriptions(first: 99) {
        edges {
          node {
            lineItems {
              id
              plan {
                pricingDetails {
                  __typename
                  ... on AppRecurringPricing {
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
            createdAt
            id
            name
            status
            test
          }
        }
      }
    }
  }
`

export const CREATE_SUBSCRIPTION = gql`
  mutation createSubscription($name: String!, $returnUrl: URL!, $trialDays: Int!, $amount: Decimal!, $test: Boolean!) {
    appSubscriptionCreate(
      name: $name
      returnUrl: $returnUrl
      trialDays: $trialDays
      lineItems: [{ plan: { appRecurringPricingDetails: { price: { amount: $amount, currencyCode: USD } } } }]
      test: $test
    ) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
        status
      }
    }
  }
`

export const CANCEL_SUBSCRIPTION = gql`
  mutation cancelSubscription($id: ID!) {
    appSubscriptionCancel(id: $id) {
      userErrors {
        field
        message
      }
      appSubscription {
        id
        status
      }
    }
  }
`
