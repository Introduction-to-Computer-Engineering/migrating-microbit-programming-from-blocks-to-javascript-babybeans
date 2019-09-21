input.onButtonPressed(Button.B, function () {
    for (let yindex2 = 4; yindex2 >= 0; yindex2--) {
        for (let xindex2 = 4; xindex2 >= 0; xindex2 -= 2) {
            led.plot(xindex2, yindex2)
            basic.pause(1500)
            led.unplot(xindex2, yindex2);
        }
    }
})
input.onButtonPressed(Button.A, function () {
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex += 2) {
            led.plot(xindex, yindex)
            basic.pause(1500)
            //led.unplot(xindex, yindex)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    while (condition != 0) {
        basic.showString("" + condition + " ")
        condition += -1
    }
    if (condition == 0) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
})

input.onButtonPressed(Button.AB, function () {
   for(let i=0; i <=4; i++){
       for(let j=0; j<=4; j++){
           led.plot(j, i);
           basic.pause(1500);
           led.unplot(j, i);
       }
 }
})
let condition = 0
condition = 3
