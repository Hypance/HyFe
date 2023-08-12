import React, { Fragment } from 'react'
import { Stack } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import { AppSummarybox } from '../../components/AppSummarybox/AppSummarybox'
import { BotForm } from '../../components/BotForm/BotForm'

export const CreateBot: React.FC = () => {
  const { botId } = useParams();
  const isEdit = Number(botId)>0?true:false;

  return (
    <Fragment>
      <Stack direction="horizontal" className="align-items-start">
        <BotForm isEdit={!!isEdit} botId={botId}  />
        <AppSummarybox />
      </Stack>
    </Fragment>
  )
}