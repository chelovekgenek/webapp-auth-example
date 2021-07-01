import { AnalyticsPoint, AnalyticsQuery, AnalyticsUpsell } from "@commerce-club/types"

import { Facade } from "./facade"

export class AnalyticsFacade extends Facade {
  static async getTransactions(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/transactions", { params })
    return data
  }

  static async getItems(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/items", { params })
    return data
  }

  static async getViews(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/views", { params })
    return data
  }

  static async getViewsPerSession(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/views-per-session", { params })
    return data
  }

  static async getCarts(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/carts", { params })
    return data
  }

  static async getSales(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/sales", { params })
    return data
  }

  static async getConversion(params: Partial<AnalyticsQuery> = {}): Promise<number> {
    const { data } = await this.client.get<number>("/analytics/conversion", { params })
    return data
  }

  static async getPoints(params: Partial<AnalyticsQuery> = {}): Promise<AnalyticsPoint[]> {
    const { data } = await this.client.get<AnalyticsPoint[]>("/analytics/points", { params })
    return data
  }

  static async getUpsells(params: Partial<AnalyticsQuery> = {}): Promise<AnalyticsUpsell[]> {
    const { data } = await this.client.get<AnalyticsUpsell[]>(`/analytics/upsells`, { params })
    return data
  }
}
