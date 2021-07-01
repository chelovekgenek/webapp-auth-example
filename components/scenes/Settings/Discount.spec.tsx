import Mount from "fixtures/mount"
import { WithFormikProps } from "fixtures/mount-with-formik"
import { RootStore } from "store/entities"

import { Discount } from "./Discount"

interface RenderProps {
  store?: DeepPartial<RootStore>
  formik?: Partial<WithFormikProps>
}

describe("Discount", () => {
  const render = ({ store, formik }: RenderProps = {}) =>
    new Mount(<Discount />).withFormik(formik).withPolaris().withStore(store).render()

  it("should render", () => {
    const { container } = render()
    expect(container.childElementCount).toBe(2)
  })

  it("should render input for each string type", async () => {
    const { container } = render()

    const [card] = Array.from(container.getElementsByClassName("Polaris-Card__Section"))

    expect(card.childElementCount).toBe(1)
  })
})
