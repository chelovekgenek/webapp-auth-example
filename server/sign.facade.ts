import Axios, { AxiosInstance } from "axios"

import { SignParams } from "./sign.types"

export class SignFacade {
  private client: AxiosInstance

  constructor(host: string) {
    this.client = Axios.create({ baseURL: host })
  }

  async sign(params: SignParams): Promise<string> {
    const { headers } = await this.client.post("/sign", null, {
      headers: {
        ["X-Shopify-Shop-Domain"]: params.shop,
        ["X-Shopify-Access-Token"]: params.token,
      },
    })
    return headers["x-access-token"]
  }

  async verify(token?: string): Promise<string> {
    const { headers } = await this.client.get("/sign", {
      headers: {
        ["X-Access-Token"]: token,
      },
    })
    return headers["x-access-token"]
  }
}
