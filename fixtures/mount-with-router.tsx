import * as nextRouter from "next/router"
import { ReactElement } from "react"

import { getRouterOptions } from "./mocks/get-router-options"

export type RouterOptions = Partial<ReturnType<typeof getRouterOptions>>

export const mountWithRouter = (tree: ReactElement, options: RouterOptions = {}) => {
  ;(nextRouter as any).useRouter = jest.fn()
  ;(nextRouter as any).useRouter.mockImplementation(() => getRouterOptions(options))

  return tree
}
