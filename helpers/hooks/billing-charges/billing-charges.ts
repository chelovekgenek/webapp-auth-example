import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMutation } from "@apollo/client"
import moment from "moment"
import head from "lodash/head"
import { Billing } from "@commerce-club/types"

import { concatAppURL } from "helpers"
import { AppAction, AppSelector, BillingSelector, RouterActions, StoreSelector } from "store/entities"
import { RoutePath } from "types/router"

import { CreateOneTimePurchaseInput, CreateOneTimePurchaseOutput } from "./billing-charges.types"
import { ONETIME_PURCHASE_CREATE } from "./billing-charges.gql"

export const useBillingCharges = () => {
  const dispatch = useDispatch()
  const installed = useSelector(AppSelector.isHookExecuted("useBillingCharges"))
  const installedSubscriptions = useSelector(AppSelector.isHookExecuted("useEventsSubscription"))
  const { data: charges } = useSelector(BillingSelector.getCharges)
  const test = useSelector(StoreSelector.getTest)
  const billing = useSelector(StoreSelector.getBilling)

  const install = useCallback(() => dispatch(AppAction.hook.executed("useBillingCharges")), [])
  const dformat = useCallback((d: Date) => moment(d).format("YYYY-MM-DD"), [])

  const [createOneTimePurchase] =
    useMutation<CreateOneTimePurchaseOutput, CreateOneTimePurchaseInput>(ONETIME_PURCHASE_CREATE)

  useEffect(() => {
    const charge = head(charges)
    if (charge && billing === Billing.Version.v2 && !installed && installedSubscriptions) {
      createOneTimePurchase({
        variables: {
          price: { amount: charge.value, currencyCode: "USD" },
          name: `Charging period ${dformat(charge.startedAt)} - ${dformat(charge.endedAt)} (id:${charge.id})`,
          returnUrl: concatAppURL(RoutePath.Index),
          test,
        },
      }).then(({ data }) => {
        if (data?.appPurchaseOneTimeCreate.confirmationUrl) {
          dispatch(RouterActions.redirectRemote(data?.appPurchaseOneTimeCreate.confirmationUrl))
        }
        install()
      })
    }
  }, [charges, test, billing, installed, installedSubscriptions])

  return {}
}
