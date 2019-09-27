let coinAHeads = false;
let coinBHeads = false;
let playerAScore = 0;
let playerBScore = 0;

input.onGesture(Gesture.Shake, function () {//displays two coins
    basic.showLeds(`
    . # . . .
    # # # . .
    . # . # . 
    . . # # # 
    . . . # .`)

    coinAHeads = Math.randomBoolean()
    coinBHeads = Math.randomBoolean()


    if (coinAHeads == coinBHeads) {//displays playerA icon and adds to their score
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
    else {//displays playerB icon and adds to their score
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


input.onButtonPressed(Button.A, function () { //display scores of both players
    basic.showString("  A: " + playerAScore)
    basic.showString(" B: " + playerBScore);
})
