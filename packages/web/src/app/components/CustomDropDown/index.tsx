import { InputLabel, Select } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { SelectInputProps } from '@material-ui/core/Select/SelectInput'
import React from 'react'

export interface CustomDropDownProps {
  title: string
  opcoes: string[]
  size: string
  onChanged: SelectInputProps['onChange']
  value: string
}

export const CustomDropdown: React.FC<CustomDropDownProps> = ({
  title,
  opcoes,
  size,
  onChanged,
  value
}: CustomDropDownProps) => {

  return (
    <FormControl variant="outlined" sx={{ width: size }}>
      <InputLabel htmlFor="outlined-sexo-native-simple">{title}</InputLabel>
      <Select
        native
        value={value}
        onChange={onChanged}
        label={title}
        inputProps={{
          name: 'option',
          id: 'outlined-sexo-native-simple'
        }}
      >
        <option aria-label="None" value="" />
        {opcoes.map((opc: string) => (
          <option>{opc}</option>
        ))}
      </Select>
    </FormControl>
  )
}
