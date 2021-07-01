import gql from "graphql-tag"

export const ONETIME_PURCHASE_CREATE = gql`
  mutation appPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!, $test: Boolean) {
    appPurchaseOneTimeCreate(name: $name, price: $price, returnUrl: $returnUrl, test: $test) {
      appPurchaseOneTime {
        id
      }
      confirmationUrl
      userErrors {
        field
        message
      }
    }
  }
`
