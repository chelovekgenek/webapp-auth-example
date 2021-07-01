/** @jsx jsx */
import { jsx } from "@emotion/react"
import { Settings } from "@commerce-club/types"

import { Text } from "components/form"

import { Section } from "./Section"

export const Strings = () => (
  <Section title="Customize Pop Up" subtitle="Customize the wording of your upsell and cross sell pop ups">
    <Text
      name={`strings[${Settings.StringKey.TITLE}]`}
      label="Title"
      tooltip="This will modify the title text that appears at the top of the pop up"
      placeholder="Other customers also bought"
    />
    <Text
      name={`strings[${Settings.StringKey.CROSSSELL_BTN}]`}
      label="Add to Cart Button"
      tooltip="This will modify the text that adds cross sell items to the cart"
      placeholder="Add"
    />
    <Text
      name={`strings[${Settings.StringKey.CROSSSELL_DONE_BTN}]`}
      label="Added to Cart Button"
      tooltip="This will modify the text that appears when the customer has added the cross sell item to their cart"
      placeholder="Added"
    />
    <Text
      name={`strings[${Settings.StringKey.UPSELL_BTN}]`}
      label="Upgrade Button"
      tooltip="This will modify the text that upgrades upsell items to the cart"
      placeholder="Upgrade"
    />
    <Text
      name={`strings[${Settings.StringKey.UPSELL_DONE_BTN}]`}
      label="Upgraded Button"
      tooltip="This will modify the text that appears when the customers has added the upsell item to their cart"
      placeholder="Upgraded"
    />
    <Text
      name={`strings[${Settings.StringKey.CONTINUE_BTN}]`}
      label="Continue to Cart Button"
      tooltip="This will modify the text that allows customers to skip straight to cart"
      placeholder="Continue to Cart"
    />
    <br />
    <Text
      name={`strings[${Settings.StringKey.POST_PURCHASE_TITLE}]`}
      label="Title"
      tooltip="This will modify the title text that appears at the top of the pop up"
      placeholder="Special deal on complimentary items!"
    />
    <Text
      name={`strings[${Settings.StringKey.POST_PURCHASE_BUY}]`}
      label="Buy Button"
      tooltip="This will modify text of the button that redirects to the invoice page"
      placeholder="Buy Now"
    />
    <Text
      name={`strings[${Settings.StringKey.POST_PURCHASE_SKIP}]`}
      label="Skip Button"
      tooltip="This will modify the text text that appears at the bottom of the pop up"
      placeholder="Maybe later"
    />
  </Section>
)
