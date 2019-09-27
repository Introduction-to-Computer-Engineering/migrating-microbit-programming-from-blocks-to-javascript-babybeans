input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(0, 2)
    if (hand == 0) { //displays  paper
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 1) {//displays rock
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else { //displays scissors
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () { //adds to the score
    game.addScore(1)
    basic.pause(100)
    basic.showString("Wins: ")
    basic.showNumber(game.score())
    if (game.score() == 5) { //checks to see if user wins
        basic.showString("You win!")
        control.reset();
    }
})
input.onButtonPressed(Button.B, function () { // subtracts from the score
    game.addScore(-1)
    basic.pause(100)
    basic.showString("Loss: ")
    basic.showNumber(game.score())

})
let hand = 0
