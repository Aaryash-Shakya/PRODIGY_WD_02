const hrDisplay = document.getElementById('hrClock')
const minDisplay = document.getElementById('minClock')
const secDisplay = document.getElementById('secClock')
const msDisplay = document.getElementById('msClock')

const lapBox = document.getElementById('lapBox')

const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')
const lapBtn = document.getElementById('lapBtn')
const resetBtn = document.getElementById('resetBtn')

let hr = 0, min = 0, sec = 0, ms = 0
let clockActive = false
let lapIndex = 1, lapScore = ''

const getTwoDigit = (val) => {
    // alternate if(val.toString().length == 1)
    if (val < 10) {
        val = '0' + val
    }
    return val
}

const stopwatch = () => {
    if (clockActive) {
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
                    hrDisplay.innerText = getTwoDigit(hr)
                }
                minDisplay.innerText = getTwoDigit(min)
            }
            secDisplay.innerText = getTwoDigit(sec)
        }
        msDisplay.innerText = getTwoDigit(ms)

        setTimeout(stopwatch, 10)
    }
}

startBtn.onclick = () => {
    clockActive = true
    stopwatch()
}

stopBtn.onclick = () => {
    clockActive = false;
}

lapBtn.onclick = () => {
    lapScore += `<p>${lapIndex++}.  ${getTwoDigit(hr)}:${getTwoDigit(min)}:${getTwoDigit(sec)}:${getTwoDigit(ms)}</p>`
    lapBox.innerHTML = lapScore
}

resetBtn.onclick = () => {
    clockActive = false;
    hr = 0, min = 0, sec = 0, ms = 0
    hrDisplay.innerText = getTwoDigit(hr)
    minDisplay.innerText = getTwoDigit(min)
    secDisplay.innerText = getTwoDigit(sec)
    msDisplay.innerText = getTwoDigit(ms)

    lapScore = ''
    lapBox.innerText = '1. --:--:--:--'
}