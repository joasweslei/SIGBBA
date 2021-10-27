import { Box, OutlinedInputProps, TextField } from '@material-ui/core'

export interface TextFieldCleanProps {
  label: string
  type: string
  value?: any
  tamanho: string
  onChange?: OutlinedInputProps['onChange']
}

export const TextFieldClean: React.FC<TextFieldCleanProps> = ({
  label,
  type,
  tamanho,
  value,
  onChange
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
        value={value}
        variant="outlined"
        onChange={onChange}
      />
    </Box>
  )
}
