/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, ProgressBar } from "@shopify/polaris"
import { Billing } from "@commerce-club/types"

import { AppAction, AppSelector, RouterActions } from "store/entities"
import { usePlan } from "helpers/hooks"
import { RoutePath } from "types/router"

import styles from "./Views.style"

export const Views = () => {
  const dispatch = useDispatch()

  const views = useSelector(AppSelector.getViews)
  const { plan: planId } = usePlan()

  const plan = Billing.PLANS[planId]
  const progress = useMemo(() => Math.ceil((views * 100) / plan.views), [plan])
  const redirect = useCallback(() => dispatch(RouterActions.redirect(RoutePath.Plans)), [])

  useEffect(() => {
    dispatch(AppAction.views.request())
  }, [])

  return (
    <div css={styles.root}>
      <span css={styles.views}>
        {views}/{plan.views} Views
      </span>
      <ProgressBar progress={progress} size="small" />
      <Button onClick={redirect}>UPGRADE NOW</Button>
    </div>
  )
}
