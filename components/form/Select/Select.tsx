/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useMemo } from "react"
import { useFormikContext } from "formik"
import { Select as PolarisSelect } from "@shopify/polaris"
import get from "lodash/get"

import { Props } from "./Select.types"
import styles from "./Select.styles"

export const Select = ({ name, label, disabled, note, isNumber, options, onChange }: Props) => {
  const { values, setFieldValue } = useFormikContext<Record<string, string>>()
  const fieldValue = useMemo(() => get(values, name), [values, name])
  const handleChange = useCallback(
    (v: string) => {
      const value = isNumber ? Number(v) : v
      setFieldValue(name, value)
      onChange?.(value)
    },
    [name, isNumber],
  )
  return (
    <div css={styles.root} data-testid={`select_${name}`}>
      {label && (
        <p className="Polaris-TextStyle--variationStrong" css={styles.label} data-testid={`select-label_${name}`}>
          {label}
        </p>
      )}
      <PolarisSelect
        label=""
        disabled={disabled}
        labelHidden
        onChange={handleChange}
        value={String(fieldValue)}
        options={options}
      />
      {note && (
        <p className="Polaris-TextStyle--variationSubdued" css={styles.note} data-testid={`select-note_${name}`}>
          {note}
        </p>
      )}
    </div>
  )
}
