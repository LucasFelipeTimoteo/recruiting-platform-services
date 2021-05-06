const ringBell = () => {
  const audioPath = `${process.env.PUBLIC_URL}/audios/bell.mp3`
  const audio = new Audio(audioPath)
  
  audio.play()
}

export default ringBell