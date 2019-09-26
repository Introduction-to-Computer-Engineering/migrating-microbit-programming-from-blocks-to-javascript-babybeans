
radio.setGroup(1);
basic.showLeds(`
# . # # #
# # # # #
# . # # # 
# . # # . 
# . # # .
`)


input.onButtonPressed(Button.A, function () {
    radio.sendString(" Marco")
    music.playTone(Note.C, 50)
})

input.onButtonPressed(Button.B, function () {
    radio.sendString(" Polo")
    music.playTone(Note.C, 50)
})

radio.onReceivedString(function (recievedString) {
    basic.showString(recievedString)

})
