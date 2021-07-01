import { Settings } from "@commerce-club/types"

import { Facade } from "./facade"

export class SettingsFacade extends Facade {
  static async get(): Promise<Settings> {
    const { data } = await this.client.get<Settings>("/settings")
    return data
  }

  static async update(params: Partial<Settings>): Promise<Settings> {
    const { data } = await this.client.patch<Settings>("/settings", params)
    return data
  }
}
