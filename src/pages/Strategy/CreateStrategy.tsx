import React, { Fragment } from 'react'
import { Stack } from 'react-bootstrap'
import { useLocation,useParams } from 'react-router-dom'
import { AppSummarybox } from '../../components/AppSummarybox/AppSummarybox'
import { StrategyForm } from '../../components/StrategyForm/StrategyForm'

export const CreateStrategy: React.FC = () => {
  const { strategyId } = useParams();
  const isEdit = Number(strategyId)>0?true:false;
  

  return (
    <Fragment>
      <Stack direction="horizontal" className="align-items-start">
        <StrategyForm isEdit={!!isEdit} strategyId={strategyId}  />
        <AppSummarybox />
      </Stack>
    </Fragment>
  )
}