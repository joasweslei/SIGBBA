import React from 'react'
import DefaultContainer from '../../app/components/DefaultSchemas/Container/DefaultContainerSchema'
import Grid from '@material-ui/core/Grid'

export const Home = () => {
  return (
    <DefaultContainer breadcrumbs={['Home']}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div style={{ backgroundColor: 'blue' }}>P</div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ backgroundColor: 'blue' }}>P</div>
        </Grid>
        <Grid item xs={8}>
          <div style={{ backgroundColor: 'blue' }}>P</div>
        </Grid>
        <Grid item xs={4}>
          <div style={{ backgroundColor: 'blue' }}>P</div>
        </Grid>
      </Grid>
    </DefaultContainer>
  )
}
