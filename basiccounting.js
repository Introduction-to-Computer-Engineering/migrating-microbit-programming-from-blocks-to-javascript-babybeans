let number = 0;

input.onButtonPressed(Button.A, function () {
    number += 10;
    basic.showNumber(number);
})
input.onButtonPressed(Button.B, function () {
    number += 1;
    basic.showNumber(number)

})
input.onGesture(Gesture.Shake, function () {
    number = 0;
    basic.showNumber(number);
})
