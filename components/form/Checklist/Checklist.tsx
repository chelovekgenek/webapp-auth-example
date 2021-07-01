/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback, useMemo } from "react"
import { useFormikContext } from "formik"
import { ChoiceList } from "@shopify/polaris"
import get from "lodash/get"

import { Props } from "./Checklist.types"
import styles from "./Checklist.styles"

export const Checklist = ({ name, label, choices, isNumber, allowMultiple }: Props) => {
  const { values, setFieldValue } = useFormikContext<Record<string, unknown[]>>()
  const fieldValue = useMemo(() => get(values, name).map((v) => String(v)), [values, name])
  const handleChange = useCallback(
    (selected: string[]) => setFieldValue(name, isNumber ? selected.map((s) => Number(s)) : selected),
    [name, isNumber],
  )

  return (
    <div css={styles.root} data-testid={`checklist_${name}`}>
      {label && (
        <p className="Polaris-TextStyle--variationStrong" css={styles.label} data-testid={`checklist-label_${name}`}>
          {label}
        </p>
      )}
      <ChoiceList
        title=""
        allowMultiple={allowMultiple}
        choices={choices}
        selected={fieldValue}
        onChange={handleChange}
      />
    </div>
  )
}
