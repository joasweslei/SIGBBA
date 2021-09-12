import { Box, TextField } from '@material-ui/core'

export interface TextFieldCleanProps {
  label: string
  type: string
  tamanho: string
}

export const TextFieldClean: React.FC<TextFieldCleanProps> = ({
  label,
  type,
  tamanho
}: TextFieldCleanProps) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: tamanho }
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        type={type}
        variant="outlined"
      />
    </Box>
  )
}
