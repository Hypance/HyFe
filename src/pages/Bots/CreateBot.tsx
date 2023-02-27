import React, { Fragment } from 'react'
import { Stack } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { AppSummarybox } from '../../components/AppSummarybox/AppSummarybox'
import { BotForm } from '../../components/BotForm/BotForm'

export const CreateBot: React.FC = () => {
  const location = useLocation();
  const isEdit = location.state;

  return (
    <Fragment>
      <Stack direction="horizontal" className="align-items-start">
        <BotForm isEdit={!!isEdit} bot={isEdit && isEdit}  />
        <AppSummarybox />
      </Stack>
    </Fragment>
  )
}