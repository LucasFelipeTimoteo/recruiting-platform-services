import React from 'react'
import { Typography } from '@material-ui/core'
import { History as TimeIcon } from '@material-ui/icons'

import useIngredientTimeStyles from './styles'
import parseNumberToMinutes from '../../../utils/GLOBAL/parseNumberToMinutes'

export default function IngredientTime({ ingredient }) {
  const parsedTime = parseNumberToMinutes(ingredient.time)
  const styles = useIngredientTimeStyles()

  return (
    <div className={styles.timeWrapper}>
      <TimeIcon className={styles.timeIcon} />
      <Typography variant="body2" className={styles.time}>
        {parsedTime}
      </Typography>
    </div>
  )
}
