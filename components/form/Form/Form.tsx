/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback } from "react"
import { Formik } from "formik"

import { validateEntity } from "helpers"

import { Props } from "./Form.types"
import styles from "./Form.styles"

export const Form = ({
  children,
  initialValues,
  onSubmit,
  validationDto,
  validationGroups = [],
  classes = {},
  classNames = {},
}: Props) => {
  const handleValidate = useCallback((values) => validateEntity(validationDto, values, validationGroups), [
    validationDto,
    validationGroups,
  ])
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      css={styles.root}
      validate={handleValidate}
      validateOnBlur
      validateOnMount
      enableReinitialize
    >
      {(props) => (
        <form css={[styles.root, classes.root]} className={classNames.root} onSubmit={props.handleSubmit}>
          {children}
        </form>
      )}
    </Formik>
  )
}
