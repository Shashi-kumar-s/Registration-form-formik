import { TextField } from '@mui/material'
import React from 'react'

const InputField= (props) => {
    const{inputStyle,label,variant,onchange}=props
  return (
    <TextField  label={label} variant={variant} className={inputStyle} onChange={onchange} />
  )
}

export default InputField