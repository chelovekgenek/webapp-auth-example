import Mount from "fixtures/mount"

import { Section } from "./Section"
import { Props } from "./Section.types"

type RenderProps = Props

describe("Section", () => {
  const render = (
    props: RenderProps = {
      title: "Test Title",
      subtitle: "Test Subtitle",
      children: <span data-testid="section-child">Test Child</span>,
    },
  ) => new Mount(<Section {...props} />).withPolaris().render()

  it("should render", () => {
    const { container } = render()
    expect(container.childElementCount).toBe(2)
  })

  it("should render title", () => {
    const { container } = render()

    const [title] = Array.from(container.getElementsByTagName("h2"))
    expect(title.innerHTML).toBe("Test Title")
  })

  it("should render subtitle", () => {
    const { container } = render()

    const [subtitle] = Array.from(container.getElementsByTagName("p"))
    expect(subtitle.innerHTML).toBe("Test Subtitle")
  })

  it("should render children", async () => {
    const { findByTestId } = render()

    const child = await findByTestId("section-child")
    expect(child.innerHTML).toBe("Test Child")
  })
})
