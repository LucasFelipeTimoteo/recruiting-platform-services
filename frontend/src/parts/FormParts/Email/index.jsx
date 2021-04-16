import React from 'react'
import { FormGroup, TextField } from '@material-ui/core'

import useEmailStyles from './styles'

export default function Email({ email, handleEmail }) {
  const emailStyles = useEmailStyles()

  return (
    <FormGroup>
      <label htmlFor="input-email" className={emailStyles.label}>
        E-mail
      </label>
      <TextField
        id="input-email"
        variant="outlined"
        size="medium"
        type="email"
        required
        value={email}
        onChange={handleEmail}
      />
    </FormGroup>
  )
}
