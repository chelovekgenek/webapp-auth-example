import { AppSubscription, Price, UserError } from "types/graphql"

export interface CreateOneTimePurchaseInput {
  name: string
  price: Price
  returnUrl: string
  test: boolean
}

export interface CreateOneTimePurchaseOutput {
  appPurchaseOneTimeCreate: {
    appPurchaseOneTime: AppSubscription
    confirmationUrl: string
    userErrors: UserError
  }
}
