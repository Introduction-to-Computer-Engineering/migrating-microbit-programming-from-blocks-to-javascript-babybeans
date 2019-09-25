let number = 0
let counter = 0
let hour = {
    name: 'hours',
    label: ' hr',
    start: function () {
        number += 60 * 60;
        basic.showNumber(number / 3600);
        basic.showString(hour.label);
    }
};

let minute = {
    name: 'minutes',
    label: ' min',
    start: function () {
        number += 60 * 5;
        basic.showNumber(number / 60);
        basic.showString(minute.label);
    }
}

input.onGesture(Gesture.Shake, function () {
    number = 0
    basic.showNumber(number)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    hour.start();
})

input.onButtonPressed(Button.B, function () {
    minute.start();

})
input.onButtonPressed(Button.AB, function () {
    counter = number
    if (number > 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        for (let i = counter; i >= 0; i--) {

            basic.pause(1000)

            if (i == 0) {
                music.playTone(Note.C, 5000)
            }

        }
    }
})
