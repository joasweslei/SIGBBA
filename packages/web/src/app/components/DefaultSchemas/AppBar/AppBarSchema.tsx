import React from 'react'
import { AppBar, Box, IconButton, Typography, Grid } from '@mui/material'
import { StyledToolbar } from './styles'
import { MoreVert,Menu, Search, ArrowForwardRounded } from '@mui/icons-material'

export interface AppBarSchemaProps {
  breadcrumbs: string[]
}

export const AppBarSchema: React.FC<AppBarSchemaProps> = ({
  breadcrumbs
}: AppBarSchemaProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex'
              }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <Menu />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flex: 1, display: 'inline-block' }}
              >
                Banco de Alimentos
              </Typography>
              <IconButton size="large" aria-label="search" color="inherit">
                <Search />
              </IconButton>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreVert />
              </IconButton>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                color="#cacaca"
                sx={{ textAlign: 'center' }}
              >
                SIGBBA
              </Typography>
              {breadcrumbs.map(breadcrumb => (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start'
                  }}
                  key={breadcrumb}
                >
                  <ArrowForwardRounded
                    sx={{
                      height: '22px',
                      width: '22px',
                      color: '#cacaca',
                      margin: '0 10px'
                    }}
                  />
                  <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    color="#cacaca"
                    sx={{ textAlign: 'center' }}
                  >
                    {breadcrumb}
                  </Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
        </StyledToolbar>
      </AppBar>
    </Box>
  )
}
