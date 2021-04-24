import React from 'react'
import { Typography } from '@material-ui/core'

export default function RecipeName({ ingredient, small }) {
  return (
    <>
      <Typography variant={small ? 'body2' : 'body1'}>
        {ingredient.name}
      </Typography>
    </>
  )
}
