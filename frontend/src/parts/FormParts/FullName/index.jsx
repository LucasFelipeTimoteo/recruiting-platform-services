import React from 'react'
import { FormGroup, TextField } from '@material-ui/core'

import useFullnameStyles from './styles'

export default function FullName({ fullName, handleFullName }) {
  const fullNameStyles = useFullnameStyles()

  return (
    <FormGroup >
      <label htmlFor="input-full-name" className={fullNameStyles.label}>
        Nome completo
      </label>
      <TextField
        id="input-full-name"
        variant="outlined"
        size="medium"
        type="text"
        required
        value={fullName}
        onChange={handleFullName}
      />
    </FormGroup>
  )
}
