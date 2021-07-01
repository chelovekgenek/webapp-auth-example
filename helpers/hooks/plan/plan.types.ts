import { Billing } from "@commerce-club/types"
import { AppSubscription, Fields, Price, UserError } from "types/graphql"

interface AppRecurringPricing {
  price: Price
}

interface AppInstallationLineItem {
  id: string
  plan: {
    pricingDetails: {
      __typename: string
    } & AppRecurringPricing
  }
}

type AllSubscriptionsEdge = {
  lineItems: AppInstallationLineItem[]
  createdAt: string
  name: string
  test: boolean
} & AppSubscription

export interface AppInstallationOutput {
  currentAppInstallation: {
    allSubscriptions: Fields<AllSubscriptionsEdge>
  }
}

export interface CreateSubscriptionInput {
  name: string
  trialDays: number
  returnUrl: string
  amount: number
  test: boolean
}

export interface CreateSubscriptionOutput {
  appSubscriptionCreate: {
    userErrors: UserError
    confirmationUrl: string
    appSubscription: AppSubscription
  }
}

export interface CancelSubscriptionInput {
  id: string
}

export interface CancelSubscriptionOutput {
  appSubscriptionCancel: {
    userErrors: UserError
    appSubscription: AppSubscription
  }
}

export interface PlanSelectHookValues {
  plan: Billing.PlanId
  loading: boolean
  handler: (index: number) => () => void
  cancel: () => Promise<void>
}
