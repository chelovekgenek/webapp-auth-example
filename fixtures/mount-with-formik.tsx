import React, { ReactElement } from "react"
import { Formik, FormikProps } from "formik"

import getFormikOptions from "./mocks/get-formik-options"

export type WithFormikProps = Partial<FormikProps<any>>
type MountWithFormik = (tree: ReactElement, config?: WithFormikProps) => ReactElement

export const mountWithFormik: MountWithFormik = (tree, config = {}) => {
  const nextConfig = getFormikOptions({}, config)
  return (
    <Formik onSubmit={nextConfig.handleSubmit as any} {...nextConfig}>
      {tree}
    </Formik>
  )
}
