import { transformAndValidateEntitySync, FlatValidationError } from "@commerce-club/models"
import { ClassType } from "class-transformer-validator"

export const validateEntity = (
  entity: ClassType<object>,
  values: object | object[],
  groups: string[] = [],
): { [key: string]: string } => {
  try {
    transformAndValidateEntitySync(entity, values, {
      validator: {
        groups,
        whitelist: true,
        forbidNonWhitelisted: false,
        forbidUnknownValues: true,
        validationError: { target: false, value: false },
      },
      transformer: {
        groups,
      },
    })
    return {}
  } catch (e) {
    const errors: FlatValidationError[] = e
    return errors.reduce<{ [key: string]: string }>((acc, value) => {
      acc[value.path] = value.message
      return acc
    }, {})
  }
}
