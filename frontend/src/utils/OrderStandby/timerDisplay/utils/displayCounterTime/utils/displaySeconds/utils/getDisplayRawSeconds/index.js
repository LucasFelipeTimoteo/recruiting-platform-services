const getDisplayRawSeconds = (remainingTime) => {
  const rawSeconds = (remainingTime % 60)

  return rawSeconds
}

export default getDisplayRawSeconds