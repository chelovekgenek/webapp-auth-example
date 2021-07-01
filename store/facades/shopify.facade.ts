import Axios from "axios"
import { DocumentNode } from "graphql"

export class ShopifyFacade {
  static async graphql<T>(query: string | DocumentNode, variables: object): Promise<T> {
    const {
      data: { data },
    } = await Axios.post<{ data: T }>(
      `/graphql`,
      { query, variables },
      { headers: { "Content-Type": "application/json" } },
    )
    return data
  }
}
