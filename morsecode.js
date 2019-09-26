radio.setGroup(1)
basic.showString("Morse Code")

input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
})

input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
})

input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
})

radio.onReceivedNumber(function (receivedNumber: Number) {
    basic.clearScreen()
    basic.pause(500)
    if (receivedNumber == 0) {
        basic.showLeds(`
       . . . . .
       . . # . . 
       . # # # .
       . . # . .
       . . . . . 
       `)
    }
    else if (receivedNumber == 1) {
        basic.showLeds(`
        . . . . . 
        . . . . . 
        . # # # .
        . . . . . 
        . . . . .`)
    }

    else if (receivedNumber == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    else {
        basic.showIcon(IconNames.No)
    }
})
