import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import moment from "moment"

import { AppAction, AppSelector, SettingsSelector } from "store/entities"
import { usePlan } from "helpers/hooks"

export const usePlanDiscount = () => {
  const dispatch = useDispatch()

  const installed = useSelector(AppSelector.isHookExecuted("usePlanDiscount"))
  const { data: settings } = useSelector(SettingsSelector.get)
  const { cancel, loading } = usePlan()

  const install = useCallback(() => {
    dispatch(AppAction.hook.executed("usePlanDiscount"))
  }, [])

  useEffect(() => {
    if (loading || !settings) return

    if (settings && !settings.discount) {
      return install()
    }

    if (!installed && settings.discount.validUntil && moment().isSameOrAfter(settings.discount.validUntil)) {
      cancel().then(install)
    }
  }, [installed, loading, settings])

  return {}
}
