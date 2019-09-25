// Just a URL target for README.md
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy);
    music.playTone(Note.G, 500);
    music.playTone(Note.G5, 500);
    basic.pause(5000);
    basic.clearScreen();

})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad);
    music.playTone(Note.G5, 500);
    music.playTone(Note.G, 500);
    basic.pause(5000);
    basic.clearScreen();
})

