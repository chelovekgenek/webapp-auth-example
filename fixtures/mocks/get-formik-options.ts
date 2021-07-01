import { FormikProps } from "formik"

type FormikOptions = <T extends object>(values: T, options?: Partial<FormikProps<T>>) => FormikProps<T>

const getFormikOptions: FormikOptions = (values, options = {}) => ({
  isValid: false,
  resetForm: jest.fn(),
  values,
  errors: {},
  touched: {},
  isSubmitting: false,
  isValidating: false,
  submitCount: 0,
  dirty: false,
  initialValues: values,
  initialErrors: {},
  initialTouched: {},
  validateOnChange: false,
  validateOnBlur: false,
  setStatus: jest.fn(),
  setErrors: jest.fn(),
  setSubmitting: jest.fn(),
  setTouched: jest.fn(),
  setValues: jest.fn(),
  setFieldValue: jest.fn(),
  setFieldError: jest.fn(),
  setFieldTouched: jest.fn(),
  getFieldProps: jest.fn(),
  getFieldMeta: jest.fn(),
  getFieldHelpers: jest.fn(),
  validateForm: jest.fn(),
  validateField: jest.fn(),
  submitForm: jest.fn(),
  setFormikState: jest.fn(),
  handleSubmit: jest.fn(),
  handleReset: jest.fn(),
  handleBlur: jest.fn(),
  handleChange: jest.fn(),
  registerField: jest.fn(),
  unregisterField: jest.fn(),
  ...options,
})

export default getFormikOptions
