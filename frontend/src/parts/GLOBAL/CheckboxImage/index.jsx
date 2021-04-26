import React from 'react'
import useCheckboxStyles from './styles'

export default function CheckboxImage({ checked, small }) {
  const src = checked ? 'check-ok.svg' : 'check-empty.svg'
  const styles = useCheckboxStyles()

  return (
    <img
      src={`${process.env.PUBLIC_URL}images/${src}`}
      alt="test"
      width="30px"
      height="30px"
      className={`
        ${styles.checkbox}
        ${small && styles.smallCheckbox}
      `}
    />
  )
}
