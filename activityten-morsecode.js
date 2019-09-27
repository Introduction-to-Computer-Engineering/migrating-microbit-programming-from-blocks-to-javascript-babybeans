radio.setGroup(1)//creates group
basic.showString("Morse Code")//shows game name

input.onButtonPressed(Button.A, function () {//sends  0
    radio.sendNumber(0)
})

input.onButtonPressed(Button.B, function () {//sends 1
    radio.sendNumber(1)
})

input.onButtonPressed(Button.AB, function () {//sends 2
    radio.sendNumber(2)
})

radio.onReceivedNumber(function (receivedNumber: Number) {
    basic.clearScreen()
    basic.pause(500)
    if (receivedNumber == 0) {//converts into morse code
        basic.showLeds(`
       . . . . .
       . . # . . 
       . # # # .
       . . # . .
       . . . . . 
       `)
    }
    else if (receivedNumber == 1) {//converts into morse code
        basic.showLeds(`
        . . . . . 
        . . . . . 
        . # # # .
        . . . . . 
        . . . . .`)
    }

    else if (receivedNumber == 2) {//converts into morse code
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    else {
        basic.showIcon(IconNames.No)//shows that somthing went wrong
    }
})
