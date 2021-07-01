/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback } from "react"

import { Text } from "components/form"
import { Section } from "./Section"

export const Discount = () => {
  const handleCodeTransform = useCallback((v: string) => (!v.length ? null : v), [])
  return (
    <Section title="Discount Code">
      <Text
        name="discount.code"
        label="Discount Code (Optional)"
        tooltip="Enter code to apply discount on your selected billing plan"
        transform={handleCodeTransform}
      />
    </Section>
  )
}
