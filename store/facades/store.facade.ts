import { Store } from "@commerce-club/types"

import { Facade } from "./facade"

export class StoreFacade extends Facade {
  static async getByOrigin(): Promise<Store> {
    const { data } = await this.client.get<Store>("/stores")
    return data
  }

  static async update(params: Partial<Store>): Promise<Store> {
    const { data } = await this.client.patch<Store>("/stores", params)
    return data
  }
}
