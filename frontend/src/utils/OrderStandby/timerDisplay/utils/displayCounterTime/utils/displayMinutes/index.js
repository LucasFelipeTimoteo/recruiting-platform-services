const displayMinutes = (remainingTime) => {
  const minutes = Math.floor(remainingTime / 60)
  const stringMinutes = String(minutes)

  return stringMinutes
}

export default displayMinutes