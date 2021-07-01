/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useMemo } from "react"
import { useFormikContext } from "formik"
import { TextField } from "@shopify/polaris"
import get from "lodash/get"

import { InfoTooltip } from "../../InfoTooltip"
import { Props } from "./Text.types"
import styles from "./Text.styles"

export const Text = ({ name, label, multiline, tooltip, type, placeholder, transform }: Props) => {
  const { values, setFieldValue } = useFormikContext<Record<string, string>>()
  const fieldValue = useMemo(() => get(values, name), [values, name])
  const handleChange = useCallback(
    (value: string) => {
      const nextValue = transform ? transform(value) : value
      if (type === "number") {
        return setFieldValue(name, Number(nextValue))
      }
      setFieldValue(name, nextValue)
    },
    [name, type],
  )
  return (
    <div css={styles.root} data-testid={`text_${name}`}>
      {label && (
        <p className="Polaris-TextStyle--variationStrong" css={styles.label} data-testid={`text_label_${name}`}>
          {label}
          {tooltip && <InfoTooltip>{tooltip}</InfoTooltip>}
        </p>
      )}
      <TextField
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        value={String(fieldValue || "")}
        type={type}
        multiline={multiline}
        label=""
        labelHidden
      />
    </div>
  )
}
