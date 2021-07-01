import * as hook1 from "helpers/hooks/use-script-tag"
import * as hook2 from "helpers/hooks/use-events-subscription"
import * as hook3 from "helpers/hooks/use-plan-discount"
import * as hook4 from "helpers/hooks/plan/plan"
import * as hook5 from "helpers/hooks/mixpanel/mixpanel"
import * as hook6 from "helpers/hooks/billing-charges/billing-charges"
import { PlanSelectHookValues } from "helpers/hooks/plan/plan.types"

export type HooksParams = {
  usePlan?: Partial<PlanSelectHookValues>
}

export const mountWithHooks = (params: HooksParams = {}): void => {
  jest.spyOn(hook1, "useScriptTag").mockReturnValue("mocked")
  jest.spyOn(hook2, "useEventsSubscription").mockReturnValue("mocked")
  jest.spyOn(hook3, "usePlanDiscount").mockReturnValue("mocked")
  jest
    .spyOn(hook4, "usePlan")
    .mockReturnValue({ plan: 0, loading: false, cancel: jest.fn(), handler: jest.fn(), ...params.usePlan })
  jest.spyOn(hook5, "useMixpanel").mockReturnValue({ track: jest.fn() })
  jest.spyOn(hook6, "useBillingCharges").mockReturnValue("mocked")
}
