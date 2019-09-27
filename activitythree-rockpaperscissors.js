let playerOne = 0 
let playerTwo = 0
let tie = 0
let total = 0
let num = 0





input.onButtonPressed(Button.A, function () { // if player one wins
    playerOne += 1  // adds to player one score
    total += 1 // adds to  total
    basic.showLeds(`  
    # . . . # 
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
    basic.showNumber(playerOne) //displays score
    if (playerOne == 5) { //checks if player one wins the game
        basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #`)
        let percentAString = ""
        let percentA = (playerOne / total) * 100; //displays percent of player one wins 

        percentAString = percentA.toString();
        percentAString = percentAString.substr(0, percentAString.indexOf('.') + 2)//sets percent to the tenth place
        basic.showString(" wins with a" + percentAString + " % win rate")
        basic.clearScreen()
        playerOne = 0
        playerTwo = 0
        tie = 0
    }
})
input.onButtonPressed(Button.B, function () { //if  player two winss
    playerTwo += 1 //adds to player two score
    total += 1; //adds to total
    basic.showLeds(`
    . # # # . 
    # . . # # 
    # . # . # 
    # # . . # 
    . # # # . 
    `)
    basic.showNumber(playerTwo)//displays player two score
    if (playerTwo == 5) { //checks if player two won the game
        basic.showLeds(`
        . # # # .
        # . . # #
        # . # . #
        # # . . #
        . # # # .
        `)
        let percentB = (playerTwo / total) * 100;
        let percentBString = percentB.toString();
        percentBString = percentBString.substr(0, percentBString.indexOf('.') + 2) //rounds to the tenth place
        basic.showString(" wins with a " + percentBString + "% win rate")
        basic.clearScreen()
        playerOne = 0;
        playerTwo = 0;
        tie = 0;
    }
})
input.onButtonPressed(Button.AB, function () { //  if both player tie
    tie += 1 //adds to tie
    total += 1 //adds to total
    basic.showLeds(`
    # # # # #
    # # . # #
    # . # . # 
    # # . # #
    # # # # #
    `)
    basic.showNumber(tie)

    if (tie == 5) { //check to see if both player tied.
        let percentC = (tie / total) * 100;
        let percentCString = ""
        percentCString = percentC.toString();
        percentCString = percentCString.substr(0, percentCString.indexOf('.') + 2)//rounds to the tenth place
        basic.showString(" It's a tie." + percentCString + "% of games were tied")
        basic.clearScreen() 
        playerOne = 0;
        playerTwo = 0;
        tie = 0;

    }

})


