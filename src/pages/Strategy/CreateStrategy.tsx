import React, { Fragment } from 'react'
import { Stack } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { AppSummarybox } from '../../components/AppSummarybox/AppSummarybox'
import { StrategyForm } from '../../components/StrategyForm/StrategyForm'

export const CreateStrategy: React.FC = () => {
  const location = useLocation();
  const isEdit = location.state;

  return (
    <Fragment>
      <Stack direction="horizontal" className="align-items-start">
        <StrategyForm isEdit={!!isEdit} strategy={isEdit && isEdit}  />
        <AppSummarybox />
      </Stack>
    </Fragment>
  )
}