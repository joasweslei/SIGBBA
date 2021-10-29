import { InputLabel, MenuItem, Select } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import { SelectInputProps } from '@material-ui/core/Select/SelectInput'
import React from 'react'

export interface CustomDropDownProps {
  title: string
  opcoes: string[]
  size: string
  onChanged: SelectInputProps['onChange']
  value: string
  labelId: string
  idSelect: string
}

export const CustomDropdown: React.FC<CustomDropDownProps> = ({
  title,
  opcoes,
  size,
  value,
  onChanged,
  labelId,
  idSelect
}: CustomDropDownProps) => {

  return (
    <FormControl sx={{ m: 1, minWidth: size }}>
      <InputLabel id={labelId}>{title}</InputLabel>
      <Select
        labelId={labelId}
        id={idSelect}
        value={value}
        onChange={onChanged}
        label={title}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {opcoes.map((opc: string) => (
          <MenuItem value={opc}>{opc}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
