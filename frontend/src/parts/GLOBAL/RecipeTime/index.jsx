import React from 'react'
import { Typography } from '@material-ui/core'
import { History as TimeIcon } from '@material-ui/icons'

import useTimeStyles from './styles'
import parseNumberToMinutes from '../../../utils/GLOBAL/parseNumberToMinutes'

export default function RecipeTime({ ingredient }) {
  const styles = useTimeStyles()
  const parsedTime = parseNumberToMinutes(ingredient.time)

  return (
    <div className={styles.timeWrapper}>
      <TimeIcon className={styles.timeIcon} />
      <Typography variant="body2" className={styles.time}>
        {parsedTime}
      </Typography>
    </div>
  )
}
