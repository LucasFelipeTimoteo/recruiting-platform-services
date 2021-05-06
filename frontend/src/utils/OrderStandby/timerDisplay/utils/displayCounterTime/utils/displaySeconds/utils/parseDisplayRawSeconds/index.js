const parseDisplayRawSeconds = (rawSeconds) => {
  const parsedRawSeconds = rawSeconds < 10 ? `0${rawSeconds}` : rawSeconds
  const seconds = String(parsedRawSeconds)

  return seconds
}

export default parseDisplayRawSeconds