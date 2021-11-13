import { Box, Divider, Typography } from '@mui/material'
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
