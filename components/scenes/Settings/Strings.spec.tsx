import Mount from "fixtures/mount"
import { WithFormikProps } from "fixtures/mount-with-formik"
import { RootStore } from "store/entities"

import { Strings } from "./Strings"

interface RenderProps {
  store?: DeepPartial<RootStore>
  formik?: Partial<WithFormikProps>
}

describe("Strings", () => {
  const render = ({ store, formik }: RenderProps = {}) =>
    new Mount(<Strings />).withFormik(formik).withPolaris().withStore(store).render()

  it("should render", () => {
    const { container } = render()
    expect(container.childElementCount).toBe(2)
  })

  it("should render input for each string type", async () => {
    const { container } = render()

    const [card] = Array.from(container.getElementsByClassName("Polaris-Card__Section"))
    expect(card.childElementCount).toBe(10)
  })
})
