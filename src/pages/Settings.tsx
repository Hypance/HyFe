import React, { Fragment } from 'react'
import { Stack } from 'react-bootstrap'
import { AppSummarybox } from '../components/AppSummarybox/AppSummarybox'
import { UserSettingsForm } from '../components/UserSettingsForm/UserSettingsForm'
export const Settings: React.FC = () => {
  return (
    <Fragment>
    <Stack direction="horizontal" className="align-items-start">
      <UserSettingsForm />
      <AppSummarybox />
    </Stack>
  </Fragment>
  )
}
