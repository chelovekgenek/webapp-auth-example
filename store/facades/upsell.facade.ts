import { Upsell, UpsellsQuery } from "@commerce-club/types"
import { Facade } from "./facade"

export class UpsellFacade extends Facade {
  static async getAll(params: Partial<UpsellsQuery> = {}): Promise<Upsell[]> {
    const { data } = await this.client.get<Upsell[]>("/upsells", { params })
    return data
  }

  static async getById(id: string | number): Promise<Upsell> {
    const { data } = await this.client.get<Upsell>(`/upsells/${id}`)
    return data
  }

  static async create(params: Partial<Upsell>): Promise<Upsell> {
    const { data } = await this.client.post<Upsell>(`/upsells`, params)
    return data
  }

  static async update(id: number, params: Partial<Upsell>): Promise<Upsell> {
    const { data } = await this.client.put<Upsell>(`/upsells/${id}`, params)
    return data
  }
}
