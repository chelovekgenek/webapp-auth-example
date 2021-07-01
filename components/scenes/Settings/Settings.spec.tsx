import Mount from "fixtures/mount"
import { RootStore } from "store/entities"

import { Settings } from "./Settings"

interface RenderProps {
  store?: DeepPartial<RootStore>
}

describe("Settings", () => {
  const render = ({ store }: RenderProps = {}) =>
    new Mount(<Settings />).withHooks().withPolaris().withRouter().withStore(store).render()

  it("should render", () => {
    const { container } = render()

    const [form] = Array.from(container.getElementsByTagName("form"))
    expect(form).toBeInTheDocument()
  })

  it("should render spinner", () => {
    const { container } = render({
      store: {
        settings: { fetching: true },
        store: { data: { plan: { trialDays: 14 } } },
        app: { message: {}, views: { data: 0 } },
      },
    })

    const [element] = Array.from(container.getElementsByClassName("Polaris-Spinner"))
    expect(element).toBeInTheDocument()
  })
})
