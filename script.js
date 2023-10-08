const hrDisplay = document.getElementById('hrClock')
const minDisplay = document.getElementById('minClock')
const secDisplay = document.getElementById('secClock')
const msDisplay = document.getElementById('msClock')

const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const lapBtn = document.getElementById('lapBtn')
const resetBtn = document.getElementById('resetBtn')

let hr = 0, min = 0, sec = 0, ms = 0
let clockActive = false

const stopwatch = () => {
    ms++
    if (ms == 100) {
        ms = 0
        sec++
        if (sec == 60) {
            sec = 0
            min++
            if (min == 60) {
                min = 0
                hr++
                hrDisplay.innerText = hr
            }
            minDisplay.innerText = min
        }
        secDisplay.innerText = sec
    }
    msDisplay.innerText = ms

    if (clockActive) {
        setTimeout(stopwatch, 100)
    }
}

startBtn.onclick = () => {
    clockActive = true
    stopwatch()
}

stopBtn.onclick = () => {
    clockActive = false;
}

resetBtn.onclick = () => {
    clockActive = false;
    hr = 0, min = 0, sec = 0, ms = 0
    hrDisplay.innerText = hr
    minDisplay.innerText = min
    secDisplay.innerText = sec
    msDisplay.innerText = ms
}