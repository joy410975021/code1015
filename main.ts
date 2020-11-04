basic.forever(function () {
    for (let x = 0; x <= 8; x++) {
        for (let y = 0; y <= 4; y++) {
            led.plot(4 - y, 4 + (y - x))
        }
        basic.pause(500)
    }
    basic.clearScreen()
})
