import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import MoreIcon from '@material-ui/icons/MoreVert'
import ArrowRight from '@material-ui/icons/ArrowForwardRounded'
import { AppBar, Box, IconButton, Typography, Grid } from '@material-ui/core'
import { StyledToolbar } from './styles'

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
                <MenuIcon />
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
                <SearchIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              >
                <MoreIcon />
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
                  <ArrowRight
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
