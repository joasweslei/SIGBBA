import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton/IconButton';
export interface TextFieldPasswordProps {
  label: string;
  size: string;
  value: string;
  tooltip: string;
  id: string;
  showValue: boolean;
  onChanged: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const TextFieldPassword: React.FC<TextFieldPasswordProps> = ({
  label,
  size,
  value,
  tooltip,
  id,
  showValue,
  onChanged,
  onClick
}) => {
  return (
    <FormControl sx={{ m: 1, width: size }} variant="outlined">
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={showValue ? 'text' : 'password'}
        value={value}
        onChange={onChanged}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={tooltip}
              onClick={onClick}
              edge="end"
            >
              {showValue ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={label}
      />
    </FormControl>
  );
}