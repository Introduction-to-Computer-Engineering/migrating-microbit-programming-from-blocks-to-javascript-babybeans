let binary = ""
let remainder = 0
let yplane = 0
let xplane = 0
let decimal = 0
let points = 0
let index = 0
let whichMessage = false
let spanishWords: string[] = []
let startPoint = 0
spanishWords = ["Hola", "despertador", "reloj", "amigo", "computador"]


input.onButtonPressed(Button.A, function () {
    let angle = 0
    if (index < spanishWords.length - 1) {
        basic.showString("" + spanishWords[index])
        index += 1
    } else {
        basic.showString("Studied all words")
    }
    servos.P0.setAngle(angle)
    for (let i = 0; i <= 180; i++) {
        servos.P0.setAngle(angle + i)
        basic.pause(100)
    }
    music.playTone(262, 100)
})
input.onButtonPressed(Button.B, function () {
    points += 1
    decimal += 1
    basic.clearScreen()
    led.plot(xplane, yplane)
    xplane += 1
    if (xplane == 5) {
        if (yplane == 4) {
            basic.clearScreen()
            control.reset()
        }
        yplane += 1
        xplane = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(points)
    basic.showNumber(points)
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onGesture(Gesture.Shake, function () {
    let decimalTemp = decimal
    basic.clearScreen()
    basic.showNumber(decimal)
    while (decimalTemp > 0) {
        remainder = decimalTemp % 2
        if (remainder == 0) {
            decimalTemp = decimalTemp / 2
            binary = "0" + binary
        } else {
            decimalTemp = (decimalTemp - 1) / 2
            binary = "1" + binary
        }
    }
    basic.showString(binary)
    binary = ""
})

input.onGesture(Gesture.LogoUp, function () {
    whichMessage = Math.randomBoolean();
    if (whichMessage == false) {
        basic.showString("Keep it up!")
    }
    else {
        basic.showString("Good job!")
    }

})

