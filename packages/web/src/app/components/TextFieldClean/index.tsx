import { Box, OutlinedInputProps, TextField } from "@mui/material"

export interface TextFieldCleanProps {
  label: string
  type: string
  value?: any
  tamanho: string
  id: string
  onChange?: OutlinedInputProps['onChange']
}

export const TextFieldClean: React.FC<TextFieldCleanProps> = ({
  label,
  type,
  tamanho,
  value,
  id,
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
        id={id}
        label={label}
        type={type}
        value={value}
        variant="outlined"
        onChange={onChange}
      />
    </Box>
  )
}


