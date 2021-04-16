import React from 'react'
import useLogoRecipe from '../../hooks/recipesSelectHooks/useLogoRecipe'

import useEmail from '../../hooks/registerFormHooks/email/useEmail'
import useFullname from '../../hooks/registerFormHooks/fullName/useFullname'

import Email from '../../parts/FormParts/Email'
import FullName from '../../parts/FormParts/FullName'
import RegisterButton from '../../parts/FormParts/RegisterButton'

import useRegisterFormStyles from './styles'

export default function RegisterForm() {
  const { logoRecipePath, logoRecipeDescription, logoRecipeName } = useLogoRecipe()
  const { fullName, handleFullName } = useFullname()
  const { email, handleEmail } = useEmail()

  const styles = useRegisterFormStyles()

  return (
    <form className={styles.form} >
      <img
        src={`${process.env.PUBLIC_URL}${logoRecipePath}`}
        alt={logoRecipeDescription}
        className={styles.logo}
        title={logoRecipeName}
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
      <RegisterButton />
    </form>
  )
}
