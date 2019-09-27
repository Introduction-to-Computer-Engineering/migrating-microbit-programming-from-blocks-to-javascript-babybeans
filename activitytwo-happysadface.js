
input.onButtonPressed(Button.A, function () { //displays happy face
    basic.showIcon(IconNames.Happy);
    music.playTone(Note.G, 500);
    music.playTone(Note.G5, 500);
    basic.pause(5000);
    basic.clearScreen();

})

input.onButtonPressed(Button.B, function () { //displays sad face
    basic.showIcon(IconNames.Sad);
    music.playTone(Note.G5, 500);
    music.playTone(Note.G, 500);
    basic.pause(5000);
    basic.clearScreen();
})

