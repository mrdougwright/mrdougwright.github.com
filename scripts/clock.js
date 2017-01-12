window.onload = function() {
  const secondHand = document.querySelector('.second-hand')
  const minuteHand = document.querySelector('.minute-hand')
  const hourHand = document.querySelector('.hour-hand')

  function setDate(second,minute,hour) {
    const now = new Date()

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90
    if(secondsDegrees === 444) {
      second.className += ' notransition'
      second.style.transform = `rotate(${secondsDegrees}deg)`
      second.className.replace(/notransition/,'')
    } else {
      second.style.transform = `rotate(${secondsDegrees}deg)`
    }

    const mins = now.getMinutes()
    const minsDegrees = ((mins / 60) * 360) + 90
    minute.style.transform = `rotate(${minsDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90
    hour.style.transform = `rotate(${hoursDegrees}deg)`
  }

  setInterval(function() {
    setDate(secondHand, minuteHand, hourHand)
  }, 1000)
}
