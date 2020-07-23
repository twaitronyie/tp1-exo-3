led.unplot(0, 0)
let posx = 0
let posy = 0
let direction = 1
direction += posy
led.plot(posx, posy)
basic.forever(function () {
    for (let posy = 0; posy <= 4; posy++) {
        if (led.point(0, posy)) {
            direction += 1
            led.plotBrightness(0, 1, 255)
            led.plot(0, 1)
        } else if (led.point(0, posy)) {
            direction += 1
            led.plotBrightness(0, 2, 170)
        } else if (led.point(0, 3)) {
            direction += posy
            led.plotBrightness(0, 3, 85)
        } else {
            direction += 1
            led.plotBrightness(0, 4, 0)
        }
    }
})
