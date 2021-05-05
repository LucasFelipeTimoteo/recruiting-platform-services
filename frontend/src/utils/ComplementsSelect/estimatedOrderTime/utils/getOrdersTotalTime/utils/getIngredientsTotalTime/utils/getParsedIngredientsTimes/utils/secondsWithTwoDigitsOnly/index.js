const secondsWithTwoDigitsOnly = (totalTimeSeconds) => {
  const splitedSeconds = totalTimeSeconds.split('')
  splitedSeconds.length = 2

  const parsedSeconds = splitedSeconds.join('')

  return parsedSeconds
}

export default secondsWithTwoDigitsOnly