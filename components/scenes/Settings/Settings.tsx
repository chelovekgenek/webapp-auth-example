/** @jsx jsx */
import { jsx } from "@emotion/react"
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Field, FieldProps, FormikValues } from "formik"
import { NextPage } from "next"
import { Button } from "@shopify/polaris"

import { SettingsAction, SettingsSelector } from "store/entities"
import { AppLayout, Spinner } from "components"
import { Form } from "components/form"

import { Strings } from "./Strings"
import { Injections } from "./Injections"
import { Discount } from "./Discount"
import { SettingsValues } from "./Settings.values"
import styles from "./Settings.styles"

export const Settings: NextPage = () => {
  const dispatch = useDispatch()
  const { fetching, data } = useSelector(SettingsSelector.get)
  const submitting = useSelector(SettingsSelector.getSubmitting)

  const handleSubmit = useCallback(
    async (values: FormikValues) => dispatch(SettingsAction.update.request(values as SettingsValues)),
    [],
  )

  return (
    <AppLayout classes={{ main: styles.root }}>
      {fetching ? (
        <Spinner />
      ) : (
        <Form
          initialValues={new SettingsValues(data)}
          validationDto={SettingsValues}
          validationGroups={[SettingsValues.Group.UPDATE]}
          onSubmit={handleSubmit}
          classes={{ root: styles.form }}
        >
          <Strings />
          <Injections />
          <Discount />
          <Field>
            {({ form }: FieldProps) => (
              <div css={styles.btn}>
                <Button primary disabled={!form.isValid} loading={submitting} onClick={form.submitForm}>
                  Save
                </Button>
              </div>
            )}
          </Field>
        </Form>
      )}
    </AppLayout>
  )
}

Settings.getInitialProps = async ({ store }) => {
  store.dispatch(SettingsAction.get.request())
}
