import displayMinutes from "../../utils/displayMinutes"
import displayParsedTotalTime from "../../utils/displayParsedTotalTime"
import displaySeconds from "../../utils/displaySeconds"

const remainingTime = 130

describe('Test integration of displayCounterTime util functions', () => {
  
  describe('displayMinutes returns the minutes part of counter display', () => {
    test('should return "2" to displayMinutes', () => {
      const expected = "2"

      const minutes = displayMinutes(remainingTime)

      expect(minutes).toBe(expected)
    })

    test('should return "0" to displayMinutes', () => {
      const expected = "0"
      const remainingTime = 59
      const minutes = displayMinutes(remainingTime)

      expect(minutes).toBe(expected)
    })
  })

  describe('displaySeconds returns the seconds part of display counter', () => {
    test('should return "10" to displaySeconds', () => {
      const expected = "10"

      const seconds = displaySeconds(remainingTime)

      expect(seconds).toBe(expected)
    })

    test('should return "00" to displaySeconds, cause the seconds have to be two digits', () => {
      const expected = "00"

      const remainingTime = 0
      const seconds = displaySeconds(remainingTime)

      expect(seconds).toBe(expected)
    })
  })

  describe('displayParsedTotalTime should concatenate minutes and seconds in format: "MINUTES:SECONDS min"', () => {
    test('should return "2:11 min" to displayParsedTotalTime', () => {
      const expected = "2:10 min"

      const minutes = "2"
      const seconds = "10"
      const counterTime = displayParsedTotalTime(seconds, minutes)

      expect(counterTime).toBe(expected)
    })

    test('should return "0:11 min" to displayParsedTotalTime', () => {
      const expected = "0:10 min"

      const minutes = "0"
      const seconds = "10"
      const counterTime = displayParsedTotalTime(seconds, minutes)

      expect(counterTime).toBe(expected)
    })
  })

})
