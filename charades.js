let arrayWords: string[] = []
arrayWords = ["cat", "guitar", "flashlight", "cupcake", "tree", "frisbee"];
let index = 0
let player1Score = 0
let player2Score = 0
let passes = 0

input.onGesture(Gesture.LogoUp, function () {
    basic.showString(arrayWords[index])

})

input.onGesture(Gesture.LogoDown, function () {
    led.stopAnimation()
    basic.clearScreen()
    if (index < arrayWords.length - 1) {
        index += 1
    }
    else {
        game.gameOver()
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("3")
    basic.pause(100)
    basic.showString("2")
    basic.pause(100)
    basic.showString("1")
    basic.pause(100)

    basic.showLeds(`
. # # # .
. . . # .
. . # # .
. . . . . 
. . # . . `) //adds the ?
})

input.onButtonPressed(Button.A, function () {
    player1Score += 1
})

input.onButtonPressed(Button.B, function () {
    player2Score += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("P1: " + player1Score + " P2 :" + player2Score)
})
input.onGesture(Gesture.TiltLeft, function () {
    let timer = 25
    while (timer != 0) {
        basic.pause(100);
        timer--;
    }
    music.playTone(Note.C, 150)
})
input.onGesture(Gesture.TiltRight, function () {
    passes += 1;
    basic.showNumber(passes);
})
