setInterval(clock, 1000)
const hour = document.querySelector('[data-hour]')
const minute = document.querySelector('[data-minute]')
const second = document.querySelector('[data-second]')

function clock(){
    const currentDate = new Date()
    const secondRatio = currentDate.getSeconds() / 60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12
    clockRotation(second, secondRatio)
    clockRotation(minute, minuteRatio)
    clockRotation(hour, hourRatio)
}


function clockRotation (element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}



clock()