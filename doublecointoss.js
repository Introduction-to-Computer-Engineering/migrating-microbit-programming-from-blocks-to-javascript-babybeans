let coinAHeads = false;
let coinBHeads = false;
let playerAScore = 0;
let playerBScore = 0;

input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
    . # . . .
    # # # . .
    . # . # . 
    . . # # # 
    . . . # .`)

    coinAHeads = Math.randomBoolean()
    coinBHeads = Math.randomBoolean()


    if (coinAHeads == coinBHeads) {
        basic.showLeds(`
        . # # # .
        # . . . #
        # # # # #
        # . . . #
        # . . . #
        `)
        playerAScore += 1;
        basic.pause(100)
        basic.clearScreen()
    }
    else {
        basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
        playerBScore += 1;
        basic.pause(100)
        basic.clearScreen();
    }
})


input.onButtonPressed(Button.A, function () {
    basic.showString("  A: " + playerAScore)
    basic.showString(" B: " + playerBScore);
})