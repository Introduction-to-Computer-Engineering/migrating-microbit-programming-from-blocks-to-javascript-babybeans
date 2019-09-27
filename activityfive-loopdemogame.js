input.onButtonPressed(Button.B, function () { 
    for (let yindex2 = 4; yindex2 >= 0; yindex2--) {
        for (let xindex2 = 4; xindex2 >= 0; xindex2 -= 2) { //plots light every other led
            led.plot(xindex2, yindex2)//plots led
            basic.pause(1500)
            led.unplot(xindex2, yindex2);//unplots led
        }
    }
})
input.onButtonPressed(Button.A, function () { //plots light every other led
    for (let yindex = 0; yindex <= 4; yindex++) {
        for (let xindex = 0; xindex <= 4; xindex += 2) {
            led.plot(xindex, yindex) //plots led
            basic.pause(1500)
            //led.unplot(xindex, yindex)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    while (condition != 0) { //counts down from three
        basic.showString("" + condition + " ")
        condition += -1
    }
    if (condition == 0) {//displays image after countdown
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
})

input.onButtonPressed(Button.AB, function () {// plots led one  at a time
   for(let i=0; i <=4; i++){
       for(let j=0; j<=4; j++){
           led.plot(j, i); //plots led
           basic.pause(1500);
           led.unplot(j, i); //unplots led
       }
 }
})
let condition = 3

