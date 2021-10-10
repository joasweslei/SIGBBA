import * as React from 'react'
import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
import { TextField } from '@material-ui/core'
export default function MaterialUIPickers() {
  const [value, setValue] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  )
//altera o nome no package.json do resto igual do lab e roda o yarn
// para lab funcionar foi trocado o nome no package.json
  const handleChange = (newValue: Date | null) => {
    setValue(newValue)
  }

  return (
    <DesktopDatePicker
      label="Date desktop"
      inputFormat="MM/dd/yyyy"
      value={value}
      onChange={handleChange}
      renderInput={params => <TextField {...params} />}
    />
  )
}
