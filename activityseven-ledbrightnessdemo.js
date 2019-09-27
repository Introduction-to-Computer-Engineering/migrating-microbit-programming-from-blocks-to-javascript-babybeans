input.onButtonPressed(Button.A, function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= 4; j++) {
            for (let y = 0; y <= 255; y += 10.2) {
                led.plotBrightness(j, i, y); //plots leds from left to right, top to bottom, and dim to bright
                basic.pause(50)
            }
        }
    }
})

input.onButtonPressed(Button.B, function () {
    for (let i = 4; i >= 0; i--) {
        for (let j = 4; j >= 0; j--) {
            for (let y = 255; y >= 0; y -= 10.2) {
                led.plotBrightness(j, i, y)// plots leds from right to left, bottom to top, then bright to dim
                basic.pause(50)
            }
        }
    }
})


input.onButtonPressed(Button.AB, function () { //displays checkerboard pattern
    basic.clearScreen()
    basic.showIcon(IconNames.Chessboard)
    led.setBrightness(led.brightness() - 51);

})


input.onGesture(Gesture.Shake, function () { //displays a fading "A"
    basic.clearScreen();
    basic.showLeds(`
    . # # # . 
    # . . . # 
    # # # # #
    # . . . # 
    # . . . #
    `)
    while (led.brightness() != 0) {
        led.setBrightness(led.brightness() - 51)
        basic.pause(100);
    }
    control.reset();//resets program
})
