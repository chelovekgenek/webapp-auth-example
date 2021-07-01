import { SerializedStyles } from "@emotion/react"
import { FormikConfig, FormikValues } from "formik"
import { ClassType } from "class-transformer-validator"

export type Props<Values extends FormikValues = FormikValues> = Pick<
  FormikConfig<Values>,
  "initialValues" | "onSubmit" | "validate"
> & {
  children: React.ReactNode
  classes?: Partial<Record<"root", SerializedStyles>>
  classNames?: Partial<Record<"root", string>>
  validationDto: ClassType<object>
  validationGroups?: string[]
}
