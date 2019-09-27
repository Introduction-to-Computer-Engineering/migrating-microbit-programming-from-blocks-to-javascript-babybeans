let number = 0;

input.onButtonPressed(Button.A, function () { //adds 10 to the number
    number += 10;
    basic.showNumber(number);
})
input.onButtonPressed(Button.B, function () {//adds 1 to the number
    number += 1;
    basic.showNumber(number)

})
input.onGesture(Gesture.Shake, function () {//resets number to 0
    number = 0;
    basic.showNumber(number);
})
