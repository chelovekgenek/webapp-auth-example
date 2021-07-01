import { BillingCharge } from "@commerce-club/types"

import { Facade } from "./facade"

export class BillingFacade extends Facade {
  static async getCharges(): Promise<BillingCharge> {
    const { data } = await this.client.get<BillingCharge>("/billing/charges")
    return data
  }
}
