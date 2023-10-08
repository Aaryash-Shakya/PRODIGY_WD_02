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

const setDisplay = (element, val) => {
    // alternate if(val.toString().length == 1)
    if (val < 10) {
        val = '0' + val
    }
    element.innerText = val
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
                    setDisplay(hrDisplay, hr)
                }
                setDisplay(minDisplay, min)
            }
            setDisplay(secDisplay, sec)
        }
        setDisplay(msDisplay, ms)

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

resetBtn.onclick = () => {
    clockActive = false;
    hr = 0, min = 0, sec = 0, ms = 0
    setDisplay(hrDisplay, hr)
    setDisplay(minDisplay, min)
    setDisplay(secDisplay, sec)
    setDisplay(msDisplay, ms)
}