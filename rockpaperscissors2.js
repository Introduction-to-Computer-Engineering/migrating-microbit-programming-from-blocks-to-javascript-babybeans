input.onGesture(Gesture.Shake, function () {
    hand = Math.randomRange(0, 2)
    if (hand == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.pause(100)
    basic.showString("Wins: ")
    basic.showNumber(game.score())
    if (game.score() == 5) {
        basic.showString("You win!")
        control.reset();
    }
})
input.onButtonPressed(Button.B, function () {
    game.addScore(-1)
    basic.pause(100)
    basic.showString("Loss: ")
    basic.showNumber(game.score())

})
let hand = 0
