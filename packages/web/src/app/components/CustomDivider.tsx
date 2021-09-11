import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import { Box } from '@material-ui/system'
import React from 'react'

interface CustomDividerProps {
  title: string
}

const CustomDivider: React.FC<CustomDividerProps> = ({
  title
}: CustomDividerProps) => {
  return (
    <Box
      sx={{
        pt: 4,
        pb: 1,
        width: '100%'
      }}
    >
      <Typography>{title}</Typography>
      <Divider />
    </Box>
  )
}

export default CustomDivider
