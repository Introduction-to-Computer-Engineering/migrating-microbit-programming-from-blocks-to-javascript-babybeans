let playerOne = 0
let playerTwo = 0
let tie = 0
let total = 0
let num = 0





input.onButtonPressed(Button.A, function () {
    playerOne += 1
    total += 1
    basic.showLeds(`
    # . . . # 
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
    basic.showNumber(playerOne)
    if (playerOne == 5) {
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #`)
        let percentAString = ""
        let percentA = (playerOne / total) * 100;

        percentAString = percentA.toString();
        percentAString = percentAString.substr(0, percentAString.indexOf('.') + 2)
        basic.showString(" wins with a" + percentAString + " % win rate")
        basic.clearScreen()
        playerOne = 0
        playerTwo = 0
        tie = 0
    }
})
input.onButtonPressed(Button.B, function () {
    playerTwo += 1
    total += 1;
    basic.showLeds(`
    . # # # . 
    # . . # # 
    # . # . # 
    # # . . # 
    . # # # . 
    `)
    basic.showNumber(playerTwo)
    if (playerTwo == 5) {
        basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
        let percentB = (playerTwo / total) * 100;
        let percentBString = percentB.toString();
        percentBString = percentBString.substr(0, percentBString.indexOf('.') + 2)
        basic.showString(" wins with a " + percentBString + "% win rate")
        basic.clearScreen()
        playerOne = 0;
        playerTwo = 0;
        tie = 0;
    }
})
input.onButtonPressed(Button.AB, function () {
    tie += 1
    total += 1
    basic.showLeds(`
    # # # # #
    # # . # #
    # . # . # 
    # # . # #
    # # # # #
    `)
    basic.showNumber(tie)

    if (tie == 5) {
        let percentC = (tie / total) * 100;
        let percentCString = ""
        percentCString = percentC.toString();
        percentCString = percentCString.substr(0, percentCString.indexOf('.') + 2)
        basic.showString(" It's a tie." + percentCString + "% of games were tied")
        basic.clearScreen()
        playerOne = 0;
        playerTwo = 0;
        tie = 0;

    }

})


