/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useMemo } from "react"
import { useFormikContext } from "formik"
import { RadioButton } from "@shopify/polaris"
import get from "lodash/get"

import { Props } from "./Radio.types"
import styles from "./Radio.styles"

export const Radio = ({ name, values = {}, disabled = false, options }: Props) => {
  const form = useFormikContext<Record<string, unknown>>()
  const fieldValue = useMemo(() => get(form.values, name) as unknown, [form.values, name])

  const handleChange = useCallback((value: unknown) => () => form.setFieldValue(name, value), [name, values])
  return (
    <div css={styles.root} className="Polaris-Stack Polaris-Stack--vertical">
      {options.map((option) => (
        <RadioButton
          disabled={disabled}
          key={option.id}
          label={option.label}
          value={option.id}
          checked={option.value === fieldValue}
          onChange={handleChange(option.value)}
        />
      ))}
    </div>
  )
}
