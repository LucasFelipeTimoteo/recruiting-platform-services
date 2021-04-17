import React from 'react'
import useCheckboxStyles from './styles'

export default function CheckboxImage({ checked }) {
  const styles = useCheckboxStyles()
  const src = checked ? 'check-ok.svg' : 'check-empty.svg'

  return (
    <img
      src={`${process.env.PUBLIC_URL}images/${src}`}
      alt="test"
      className={styles.checkbox}
    />
  )
}
