input.onButtonPressed(Button.A, function () {
    binary = "" + binary + "1"
    basic.clearScreen()
    basic.pause(500)
    basic.showString(binary)
    decimal = decimal * 2 + 1
})

input.onButtonPressed(Button.B, function () {
    binary = "" + binary + "0"
    basic.clearScreen()
    basic.pause(500)
    basic.showString(binary)
    decimal *= 2;
})

input.onGesture(Gesture.Shake, function () {
    decimal = 0;
    binary = ""
    basic.showNumber(decimal)
})

let decimal = 0
let binary = ""
let remainder = 0

input.onButtonPressed(Button.AB, function () {
    while(decimal > 0) {
        remainder = decimal % 2;
        if (remainder == 0) { 
                decimal = decimal / 2
                binary = "0" + binary;
        } else {
                decimal = (decimal-1) / 2
                binary = "1" + binary;
        }
}
})

input.onGesture(Gesture.LogoUp, function(){
    binary = binary.substr(0, binary.length-1);
    basic.showString(binary)
})

