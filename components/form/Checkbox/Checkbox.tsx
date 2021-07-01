/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useEffect, useMemo, useState } from "react"
import { useFormikContext } from "formik"
import { Checkbox as CheckboxField } from "@shopify/polaris"
import get from "lodash/get"

import { Props } from "./Checkbox.types"
import styles from "./Checkbox.styles"

export const Checkbox = ({ name, label, note, values, classes }: Props) => {
  const form = useFormikContext<Record<string, unknown>>()
  const fieldValue = useMemo(() => get(form.values, name) as boolean, [form.values, name])

  const [checked, setChecked] = useState(!!fieldValue)

  useEffect(() => {
    setChecked(fieldValue)
  }, [fieldValue])

  const handleChange = useCallback(
    (v: boolean) => {
      setChecked(v)
      if (typeof values?.truthy !== "undefined" && v === true) {
        return form.setFieldValue(name, values.truthy)
      }
      if (typeof values?.falsy !== "undefined" && v === false) {
        return form.setFieldValue(name, values.falsy)
      }
      form.setFieldValue(name, v)
    },
    [name, values],
  )
  return (
    <div css={[styles.root, classes?.root]}>
      <CheckboxField label={label} checked={checked} onChange={handleChange} />
      {note && (
        <p className="Polaris-TextStyle--variationSubdued" css={styles.note}>
          {note}
        </p>
      )}
    </div>
  )
}
