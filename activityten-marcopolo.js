
radio.setGroup(1);//creates a group
basic.showLeds(`
# . # # #
# # # # #
# . # # # 
# . # # . 
# . # # .
`)


input.onButtonPressed(Button.A, function () {//sends marco message
    radio.sendString(" Marco")
    music.playTone(Note.C, 50)
})

input.onButtonPressed(Button.B, function () {//sends polo message
    radio.sendString(" Polo")
    music.playTone(Note.C, 50)
})

radio.onReceivedString(function (recievedString) {//allows the receiving microbit to display received message.
    basic.showString(recievedString)

})
