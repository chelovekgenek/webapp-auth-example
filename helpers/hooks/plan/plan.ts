import { useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMutation, useQuery } from "@apollo/client"
import { Billing } from "@commerce-club/types"

import { RouterActions, SettingsSelector, StoreSelector } from "store/entities"
import { RoutePath } from "types/router"
import { discounted, concatAppURL } from "helpers"

import { CANCEL_SUBSCRIPTION, CREATE_SUBSCRIPTION, CURRENT_INSTALLATION } from "./plan.gql"
import {
  AppInstallationOutput,
  CancelSubscriptionInput,
  CancelSubscriptionOutput,
  CreateSubscriptionInput,
  CreateSubscriptionOutput,
  PlanSelectHookValues,
} from "./plan.types"

export const usePlan = (): PlanSelectHookValues => {
  const dispatch = useDispatch()
  const discount = useSelector(SettingsSelector.getDiscount)
  const trialDays = useSelector(StoreSelector.getPlanTrialDays)
  const test = useSelector(StoreSelector.getTest)

  const { data, refetch, loading } = useQuery<AppInstallationOutput>(CURRENT_INSTALLATION)
  const [createSubscription] = useMutation<CreateSubscriptionOutput, CreateSubscriptionInput>(CREATE_SUBSCRIPTION)
  const [cancelSubscription] = useMutation<CancelSubscriptionOutput, CancelSubscriptionInput>(CANCEL_SUBSCRIPTION)

  const [selectedPlanId] = useMemo(() => {
    const edge = data?.currentAppInstallation.allSubscriptions.edges.find(({ node: { status } }) => status === "ACTIVE")
    const entry = Object.entries(Billing.PLANS).find(([_itemId, { name }]) => edge?.node.name === name) as
      | [Billing.PlanId, Billing.Plan]
      | undefined

    return entry
      ? [Number(entry[0]), entry[1], edge?.node.id]
      : [Billing.PlanId.FREE, Billing.PLANS[Billing.PlanId.FREE]]
  }, [data])

  const create = useCallback(
    async (next: Billing.Plan) => {
      const { data } = await createSubscription({
        variables: {
          name: next.name,
          returnUrl: concatAppURL(RoutePath.Plans),
          amount: discounted(Number(next.value), discount),
          trialDays,
          test,
        },
      })
      if (data?.appSubscriptionCreate.confirmationUrl) {
        dispatch(RouterActions.redirectRemote(data?.appSubscriptionCreate.confirmationUrl))
      }
    },
    [discount, trialDays, test],
  )

  const cancel = useCallback(async () => {
    await Promise.all(
      (data?.currentAppInstallation.allSubscriptions.edges || []).map((edge) =>
        edge.node.status === "ACTIVE" ? cancelSubscription({ variables: { id: String(edge.node.id) } }) : undefined,
      ),
    )
  }, [data])

  const handler = useCallback(
    (id: Billing.PlanId) => async () => {
      const next = Billing.PLANS[id]
      if (next.value !== null) {
        await cancel()
        await create(next)
      }
      await refetch?.()
    },
    [create, refetch],
  )

  return {
    handler,
    cancel,
    plan: selectedPlanId,
    loading,
  }
}
