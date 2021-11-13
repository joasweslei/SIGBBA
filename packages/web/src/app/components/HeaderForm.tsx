
import { ArrowForwardRounded } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { BackwardButton } from './BackwardButton'

interface HeaderFormProps {
  breadcrumbs: string[]
  pageMode?: 'Inserção' | 'Edição' | undefined
  onBackButtonClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

const HeaderForm: React.FC<HeaderFormProps> = ({
  breadcrumbs,
  onBackButtonClick,
  pageMode
}: HeaderFormProps) => {
  return (
    <Container
      sx={{
        flex: 1,
        height: 83,
        boxShadow: '3px 0px 16px -3px rgba(0,0,0,0.32)',
        marginTop: 5
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          height: '100%',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            '@media(max-width: 630px)': {
              marginRight: 'auto'
            }
          }}
        >
          <BackwardButton onClick={onBackButtonClick} />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            '@media(max-width: 630px)': {
              display: 'none'
            }
          }}
        >
          <Typography
            variant="body1"
            noWrap
            component="div"
            color="#7c7c7c"
            sx={{ textAlign: 'center', marginLeft: 2 }}
          >
            SIGBBA
          </Typography>
          {breadcrumbs.map(breadcrumb => (
            <>
              <ArrowForwardRounded
                key={breadcrumb}
                sx={{
                  height: '22px',
                  width: '22px',
                  color: '#7c7c7c',
                  margin: '0 10px'
                }}
              />
              <Typography
                key={breadcrumb}
                variant="body1"
                noWrap
                component="div"
                color="#7c7c7c"
                sx={{ textAlign: 'center' }}
              >
                {breadcrumb}
              </Typography>
            </>
          ))}
        </Box>
        <Box>
          <Typography
            variant="h5"
            noWrap
            component="div"
            color="#7c7c7c"
            sx={{ textAlign: 'center' }}
          >
            {pageMode ?? 'Inserção'}
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default HeaderForm
