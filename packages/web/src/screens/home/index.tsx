import React from 'react'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import Grid from '@mui/material/Grid'
import { Paper } from '@mui/material'
import { DapValidation } from './components/dapValidationList'
import { InputList } from './components/inputList'
import { OutputList } from './components/outputList'
import { ProposalList } from './components/proposalList'
import { ListButton } from './components/listButton'

export const Home = () => {
  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Paper elevation={3}>
            <InputList></InputList>
            <ListButton destiny="/pedidos"></ListButton>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <DapValidation></DapValidation>
            <ListButton destiny=""></ListButton>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper elevation={3}>
            <OutputList></OutputList>
            <ListButton destiny=""></ListButton>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={3}>
            <ProposalList></ProposalList>
            <ListButton destiny=""></ListButton>
          </Paper>
        </Grid>
      </Grid>
    </DefaultContainer>
  )
}
