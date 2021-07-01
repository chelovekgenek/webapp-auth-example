import { ReactElement } from "react"
import { render, RenderResult, RenderOptions } from "@testing-library/react"
import { FormikProps } from "formik"

import { RootStore } from "store/entities/reducer"

import { mountWithApollo, WithApolloParams } from "./mount-with-apollo"
import { mountWithAppBridge } from "./mount-with-app-bridge"
import { mountWithFormik } from "./mount-with-formik"
import { mountWithPolaris } from "./mount-with-polaris"
import { mountWithRouter, RouterOptions } from "./mount-with-router"
import { mountWithStore } from "./mount-with-store"
import { mountWithHooks, HooksParams } from "./mount-with-hooks"

class Mount {
  private tree: ReactElement

  constructor(tree: ReactElement) {
    this.tree = tree
  }

  withApollo(params: WithApolloParams = {}): Mount {
    return new Mount(mountWithApollo(this.tree, params))
  }

  withAppBridge(): Mount {
    return new Mount(mountWithAppBridge(this.tree))
  }

  withFormik<T>(config: Partial<FormikProps<T>> = {}): Mount {
    return new Mount(mountWithFormik(this.tree, config))
  }

  withPolaris(): Mount {
    return new Mount(mountWithPolaris(this.tree))
  }

  withRouter(options: RouterOptions = {}): Mount {
    return new Mount(mountWithRouter(this.tree, options))
  }

  withStore(reducers?: DeepPartial<RootStore>): Mount {
    return new Mount(mountWithStore(this.tree, reducers))
  }

  withHooks(params: HooksParams = {}): Mount {
    mountWithHooks(params)
    return new Mount(this.tree)
  }

  render(options?: Omit<RenderOptions, "queries">): RenderResult {
    return render(this.tree, options)
  }
}

export default Mount
