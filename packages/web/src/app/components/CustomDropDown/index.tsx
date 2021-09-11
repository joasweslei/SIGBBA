import { InputLabel, Select } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import React from 'react'

export interface CustomDropDownProps {
  title: string
  opcoes: string[]
  size: string
}

export const CustomDropdown: React.FC<CustomDropDownProps> = ({
  title,
  opcoes,
  size
}: CustomDropDownProps) => {
  const [chooseOptions, setOptions] = React.useState({
    option: '',
    nameOptions: 'hai'
  })

  const handleChangeOption = (event: any) => {
    const nameOptions = event.target.name
    setOptions({
      ...chooseOptions,
      [nameOptions]: event.target.value
    })
    // console.log(event.target.value)
  }

  return (
    <FormControl variant="outlined" sx={{ width: size }}>
      <InputLabel htmlFor="outlined-sexo-native-simple">{title}</InputLabel>
      <Select
        native
        value={chooseOptions.option}
        onChange={handleChangeOption}
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
