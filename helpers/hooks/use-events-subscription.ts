import { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useMutation, useQuery } from "@apollo/client"

import { AppAction, AppSelector } from "store/entities"

import { ADD_EVENTS, GET_EVENTS } from "./use-events-subscription.gql"
import { TOPICS, GetResult, GetInput, AddResult, AddInput } from "./use-events-subscription.types"

export const useEventsSubscription = () => {
  const dispatch = useDispatch()
  const installed = useSelector(AppSelector.isHookExecuted("useEventsSubscription"))
  const install = useCallback(() => {
    dispatch(AppAction.hook.executed("useEventsSubscription")), console.log("Webhooks are installed successfuly!")
  }, [])

  const skip = useMemo(() => !SHOPIFY_EVENTS_ARN || installed, [])

  const { data } = useQuery<GetResult, GetInput>(GET_EVENTS, { variables: { first: 99 }, skip })
  const [addEvent] = useMutation<AddResult, AddInput>(ADD_EVENTS)

  useEffect(() => {
    if (data && !skip) {
      const subscribed = data.webhookSubscriptions.edges.filter(
        (edge) => TOPICS.includes(edge.node.topic) && edge.node.endpoint.arn === SHOPIFY_EVENTS_ARN,
      )
      Promise.all(
        TOPICS.map(async (topic) => {
          if (!subscribed.some((edge) => edge.node.topic === topic)) {
            const event = await addEvent({
              variables: {
                topic,
                webhookSubscription: {
                  arn: SHOPIFY_EVENTS_ARN,
                  format: "JSON",
                },
              },
            })
            if (event.data?.eventBridgeWebhookSubscriptionCreate.userErrors.length)
              event.data.eventBridgeWebhookSubscriptionCreate.userErrors.forEach((error) =>
                console.warn(topic, error.message),
              )
          }
        }),
      ).then(install)
    }
  }, [data, skip])

  return {}
}
