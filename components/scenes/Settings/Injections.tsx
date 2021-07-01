/** @jsx jsx */
import { jsx } from "@emotion/react"
import { Settings } from "@commerce-club/types"

import { Text } from "components/form"

import { Section } from "./Section"

export const Injections = () => (
  <Section title="Customize Styles">
    <Text
      name={`injections[${Settings.InjectionType.CSS}]`}
      label="CSS"
      tooltip="This will modify the styles of your popup"
      multiline={6}
    />
    <Text
      name={`injections[${Settings.InjectionType.JS}]`}
      label="JavaScript"
      tooltip="This will modify the behavior of your popup"
      multiline={6}
    />
  </Section>
)
