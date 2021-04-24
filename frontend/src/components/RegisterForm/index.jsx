import React from 'react'

import useThumbnail from '../../hooks/thubmbnail/useThumbnail'
import useEmail from '../../hooks/registerFormHooks/email/useEmail'
import useFullname from '../../hooks/registerFormHooks/fullName/useFullname'

import Email from '../../parts/FormParts/Email'
import FullName from '../../parts/FormParts/FullName'
import RegisterButton from '../../parts/FormParts/RegisterButton'

import useRegisterFormStyles from './styles'

export default function RegisterForm() {
  const { fullName, handleFullName } = useFullname()
  const { email, handleEmail } = useEmail()

  const {
    thumbnailRecipeDescription,
    thumbnailRecipePath,
    thumbnailRecipeName
  } = useThumbnail()

  const styles = useRegisterFormStyles()

  return (
    <form className={styles.form} >
      <img
        src={`${process.env.PUBLIC_URL}${thumbnailRecipePath}`}
        alt={thumbnailRecipeDescription}
        className={styles.logo}
        title={thumbnailRecipeName}
      />
      <div className={styles.inputsWrapper}>
        <FullName
          fullName={fullName}
          handleFullName={handleFullName}
        />
        <Email
          email={email}
          handleEmail={handleEmail}
        />
      </div>
      <RegisterButton
        fullName={fullName}
        email={email}
      />
    </form>
  )
}
