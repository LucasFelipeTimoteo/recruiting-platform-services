import React, { memo } from 'react'
import useCheckboxStyles from './styles'

function CheckboxImage({ checked, small }) {
  const src = checked ? 'check-ok.svg' : 'check-empty.svg'
  const altText =  checked ? 'checked checkbox' : 'unchecked checkbox'
  
  const styles = useCheckboxStyles()

  return (
    <img
      src={`${process.env.PUBLIC_URL}images/${src}`}
      alt={altText}
      width="30px"
      height="30px"
      className={`
        ${styles.checkbox}
        ${small && styles.smallCheckbox}
      `}
    />
  )
}

export default memo(CheckboxImage)