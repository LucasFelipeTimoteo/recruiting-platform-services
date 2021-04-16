import { useState } from "react"

import getFullNameStorage from "../../../utils/RegisterForm/FullName/getFullNameStorage"
import setFullNameStorage from "../../../utils/RegisterForm/FullName/setFullNameStorage"

export default function useFullname() {
  const initialValue = getFullNameStorage() || ''
  const [fullName, setFullname] = useState(initialValue)

  const handleFullName = (e) => {
    const inputValue = e.target.value
    setFullNameStorage(inputValue)

    setFullname(inputValue)
  }

  return {
    fullName,
    handleFullName
  }
}
