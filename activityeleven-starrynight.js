


let arrayNums = [3, 5, 7, 1, 2];//creates array

input.onButtonPressed(Button.A, function () {
    for (let i = 0; i < arrayNums.length; i++) {
        for (let j = 0; j < arrayNums[i] - 1; j++) {
            led.plot(Math.randomRange(0, 5), Math.randomRange(0, 5))//displays a random amount of randomly plotted leds
        }
    }

    basic.pause(1000)
    basic.clearScreen();

})

input.onButtonPressed(Button.B, function () {//displays elements in array
    for (let value of arrayNums) {
        basic.showNumber(value);
    }
    basic.clearScreen()
})

input.onButtonPressed(Button.AB, function () {//displays elements + 1 
    for (let value of arrayNums) {
        value += 1;
        basic.showNumber(value)
    }
})
