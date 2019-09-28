# CPE 1040 - Introduction to Computer Engeneering

## Assignment: Migrating micro:bit Programming from Blocks to JavaScript

### 1. Summary

This assignment asks you to go through a [Intro to CS course with Blocks](https://makecode.microbit.org/courses/csintro) for the micro:bit, and write parallel programs using the JavaScript equivalent of the code in the course modules. This assignment is submitted through Github.

### 2. Requirements

#### 2.1 Section programs

1. The CS course is broken down into thematic sections. There are 5 sections + 1 midterm project + 5 sections + final project. Each section has 4 parts. You want the _Activity_ part, which contains the section's CS material and Blocks.

2. You need to write a _working_ JavaScript (JS) program for the micro:bit for each of these sections/projects, for a total of 12.  

3. For the non-project sections, you are required to use the JS equivalent of the material from the section. _**Note:** For these programs, you are allowed to look at the JS translation of Blocks programs._

4. For the midterm project, you are required to use the JS equivalent of the material from all 5 preceding sections.  _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._ (An aside: if you don't know how to read a statement like "you are not allowed to", the intended and preferred interpretation is "you can do whatever you want and won't be penalized by me, but, if you want to learn most effectively, I suggest that you do not resort to...".)

5. For the final project, you are required to use the JS equivalent of the material from all 10 preceding non-project sections. _**Note:** For this project, you are NOT allowed to look at the JS translation of Blocks programs._

#### 2.2 Github commits & tags

1. Working in the Makecode browser environment, you cannot save the JS file of your program in a directory of your choosing. It is stored in an in-browser memory object and is not accessible. (A side note: there might be a Makecode app for Windows which might actually allow that, but there is nothing like that for Mac, to the best of knowledge.) So, you will need to copy the JS from Makecode to another editor (preferably, a code editor with syntax highlighting and code manipulation) and then save and commit it.

2. You need to commit the changes and additions to your assignment for each section or project. This means that there should be _at least_ 12 commits pushed to your remote assignment repository on Github when you are done. I advise you to have more than that, to get used to it.

2. You need to **tag** the final commit for each section. Tags are under _releases_ in the repository bar on the Github page of the assignment repository. The tag should be one of the following `v0.1`, `v0.2`, ..., `v0.12`, for each section, respectively. (Terminology clarification: the `git` command is `git tag`, but tags are counted as _releases_ on Github.)

3. You need to update the assignment repository [README.md](README.md) (this document, in the section [Tags](#tags)) with a short description of your section program or project, **before** you tag. You can do that directly on Github after you push your commits from your local repository.

#### 2.3 Project design

1. For each of the two projects, you need to include a design "document" in the [README.md](README.md) (this document, in the section [Designs](#designs)).

2. The design "document" should follow the _problem-solving tips_ in the [mini-project page](https://makecode.microbit.org/courses/csintro/miniproject).

3. The design "document" should have at least the following sections: Goal, Design process, and JS Language Constructs & Objects. Articulating clearly your engineering work is a key professional skill.

## Resources

### micro:bit 

1. [micro:bit lessons](https://makecode.microbit.org/lessons).

2. [micro:bit ideas](https://microbit.org/ideas/).

3. A list of some more [advanced projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects).

4. The [projects](https://www.itpro.co.uk/desktop-hardware/26289/13-top-bbc-micro-bit-projects) at the [awesome micro:bit list](https://github.com/carlosperate/awesome-microbit).

### Github

1. Github Tutorial for Beginners ([webpage](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).

2. Github Basics for Mac and Windows ([video](https://www.youtube.com/watch?v=0fKg7e37bQE)).

3. git & Github Crash Course for Beginners ([video](https://www.youtube.com/watch?v=SWYqp7iY_Tc)).

4. Introduction to Github for Beginners ([video](https://www.youtube.com/watch?v=fQLK8Ib_SKk)).

5. About `git` ([webpage](https://git-scm.com/about)).

6. `git` [documentation](https://git-scm.com/doc) (webpage, book, videos, reference manual).

### JavaScript

1. Technically, the language which is used side-by-side with Blocks in the Makecode environment is a subset of [TypeScript](https://makecode.com/language), which itself is a superset of JavaScript (technically, [ECMAScript](https://www.ecma-international.org/ecma-262/10.0/index.html#Title)), with some JS features not implemented in Makecode.

2. The limited [JavaScript mini-tutorial](https://makecode.microbit.org/javascript) in Makecode. Make sure you read it but that can't be your only reference.

3. Official [TypeScript documentation]():
   1. TypeScript in 5 min [tutorial](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html). _**Highly recommended!** You will need to [download](https://www.typescriptlang.org/index.html#download-links) and install an integrated development envinronment (IDE). The two that I recommend are Visual Studio Code from Microsoft and WebStorm from JetBrains._
   2. The full documentation and reference is under _Handbook_. Bear in mind that you are drinking from the hose. Don't be surprised if not everything is presented in a strictly incremental manner.
   
4. In-browser TypeScript [playground](https://www.typescriptlang.org/play/index.html). Note that micro:bit specific code will not run, but you can still play. _Start making the distinction between a generic multi-purpose programming language (TypeScript) and functionality (libraries, objects, etc.) that is specific to a particular device (micro:bit), though written in the same programming language._

5. A pretty good and very palatable JS tutorial with in-browser coding, by [Codecademy](https://www.codecademy.com/learn/introduction-to-javascript).

6. Extensive and detailed [JS tutorial](https://javascript.info/), with some advanced material thrown in. _**I like this one!**

7. The most authoritative JS resource on the Web, including tutorials and reference, by [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript).

---

## Tags

**Note:** Add your program descriptions below._

### v0.1

**Note:** My basic counting project [file](basiccounting.js)**] 

This program allows the user to create a number using either ones or tens. The number starts off at zero. For each time the A button is pressed, a total of ten is added to the number. For each time the B button is pressed, a total of one is added to the number. The number is reset to 0 if the microbit is shaken.
### v0.2

**Note:** My happy sad face project [file](happysadface.js)**]

This is a simple program that shows a smiley face and makes a happy sound after button A is pressed. If button B is pressed instead the screen shows a sad face and makes a sad noise.
### v0.3
This program allows you to keep track of the amount of wins per player in a game of Rock Paper Scissors, in addition to the amount of ties. When player one wins they press button A and their total wins are displayed after their icon. When player two wins they press button B and their total wins are displayed after their icon. When there is a tie both buttons are pressed and the total number of ties is displayed after the icon for ties. When the amount of wins a player has accumulated has reached five, the program will announce the winner and show the percent of wins that player had based on the number of games played. If the amount of ties reaches five first, the program will then call it a tie and report the percent of ties based on the number of games played.
**Note** My rock paper scissors project [file](rockpaperscissors.js)**]

### v0.4
**Note** My rock paper scissors pt. 2 project [file](rockpaperscissors2.js)**]

This program allows the user to play a game of rock paper scissors with the microbit. If the user shakes the microbit the program will display either rock, paper, or scissors. If the user won the round they will press the A button and the total score will increase by one. If the user lost they will press the B button and the total score will decrease by one. The score will not drop into negative numbers but instead remain at zero until the user wins again. This process is repeated to continue the game until the user reaches five wins. Once the user reaches five wins the program will announce that the user won and then reset the program.

### v0.5
**Note** My demo game that contains different kinds of loops. [file](loopdemogame.js)]
This program allows the user to play with the led display on the microbit. To start the program, the user shakes the microbit. The program will count down from three and then display a pattern on the led screen. The user then has the choice to press button A, button B, or both buttons A and B at the same time. If the button A is pressed, the screen will light up every other led one at a time starting from the top left corner and traveling toward the bottom right corner. If the button B is pressed, every other led will flash one at a time starting from the bottom right corner traveling toward the top left corner. If both buttons are pressed every led will flash one at a time starting from the top left and then traveling down the screen toward the bottom left corner.
### v0.6
**Note** My midterm project, described in length in the design section.[file](timer.js)] This project created a timer that could be used in many different situation. There is also a diagram and .docx file describing in more detail.

### v0.7
**Note** My led brightness demo project. [file](ledbrightnessdemo.js)]
This demo is a program that demonstrates the use of for loops custom led brightness. If Button A is pressed, the leds will gradually light up one by one from the top left to the top right. If Button B is pressed, the leds will light up one by one from the bottom right corner to the top left corner. However, unlike the Button A command where the leds stay lit up, the Button B command will cause the leds to gradually light up and then slowly fade out. If both the Button A and Button B are pressed at the same time, then a checkerboard pattern will appear on the screen. If the microbit is shaken, then the display will show the letter "A" that will slowly fade from full brightness to a dark display.
### v0.8 
**Note** My double coin toss program. [file](doublecointoss.js)]
This program simulates the throwing of two coins. The user shakes the microbit to initiate the simulation. If both "coins" are the same face, player A gets points. If both "coins" are showing different faces, player B gets points. If Button A is pressed, both player A and player B's points are displayed.

### v0.9
**Note** My transmogrifier program. [file](transmogrifier.js)]
This program allows the user to enter in a binary number. If Button A is pressed, a "1" is added to the right side of the binary number. If Button B is pressed, a "0" is added to the right side of the binary number. If after entering a one or a zero the user wishes to erase only the most recent addition to the binary number, the user can move the microbit so that the logo is tilted up. This will erase the number one position at a time from right to left. If the logo is tilted downwards, the program will display the number in base ten. If both Button A and Button B are pressed at the same time, the program will then display the number in binary. To reset the number back to zero, all that needs to be done is shake the microbit.
### v0.10
**Note** My two programs for this section, marcopolo [file](marcopolo.js)] and morsecode [file](morsecode.js)]. 
The marcopolo program:
The marcopolo program allows two microbits to interact with each other. Both microbits will display the letters "MP" on the screen. If Button A is pressed on either microbit, the other one will display "Marco" with the leds and beep. If Button B. is pressed on either microbit, the other microbit will display "Polo" with the leds.

The morsecode program:
The morsecode program allows two microbits to send each other messages. Depending on the input, the receiving microbit will display the number with one of three morse code symbols. If Button A is pressed, The receiving microbit will display a dot in the middle of the display. If Button B is pressed, then the receiving microbit will display a line in the middle of the screen. If both Button A and Button B are pressed at the same time, the whole screen will light up. If something goes wrong with the messaging, the microbit will then display "X" on the screen.
### v0.11
**Note** My two programs for the Array section, starrynight [file](starrynight)] and charades [file](charades)].
My two array projects, starrynight and charades:

Starrynight- If Button A is pressed, the leds will display a a random pattern of leds with varying amounts of lit leds. If Button B is pressed, the program will run through an array and display the elements of the array. If
both Button A and Button B are pressed at the same time, the program will run through the array but add one to each of the elements for the display, but the actual elements remain unchanged.

Charades- To start the game the user will shake the microbit. The display will then count down from three and then show a question mark. The user will then tilt the microbit so that the logo is elevated above the rest of the microbit. This will cause a word to flash across the screen that can be acted out. When the word if shown, the user can tilt the microbit so that the left side is below the rest of the microbit, starting a timer. When the user wants to move on to another word, they just need to tilt the micribit so that the logo is below the rest of the microbit. If player one guesses the word, then they get a point and press Button A to add to their score. If player two guesses a word, they will press Button B to add to their score. To display the score, both Button A and Button B need to be pressed at the same time. If the players were unable to guess the word, they can tilt the microbit so that the right side is below the rest of the microbit. This action will display the number of passes.

### v0.12
**Note** My final project [file](finalproject.js)]
A program that allows me to study spanish terms with my friends. Described in length in the goal section. The design of this project can be seen in this file  [file](final.png)].  If button a is pressed, a new term is displayed until the the user reaches the end of the list. Each term is timed with use of the servo.  If Button B is pressed, it adds points to the user's score and displays a led one at a time from right to left then goes down a row and goes right to left again until the led reaches the bottom right led. At that point, the microbit will reset because the user reached the desired number of correct answers. If the user presses both Button A and B at the same time, their score is sent to and displayed on another microbit.
If the logo is tilted up, there will be one of two messages. Either it will say "Good job!" or "Keep it up!". If the logo is tilted down, the user will be taught one of two verbs. Whichever verb it is, the microbit  will display the meaning of the verb, it's stem, the ending, the first person conjugation, and the full verb itself. If the microbit is shaken, the score will be shown as a decimal, but then converted into binary and displayed as a binary number.

## Designs


### Midterm project

_**Note:** The goal of this project was to create a timer that could be set in minutes and hours, run accurately, and alert the user that the alarm has timer has run out of time. 

#### Goal

**I need a new alarm, so I wanted to write code that  I would actually use  in my every day life. The goal was to be able to take input in minutes and hours, then display the input. If the input is the desired amount of time, then a timer can be set. The timer would then decrement until the timer reaches zero. After the timer reaches zero, a tone would be played. I wanted a failsafe in case the wrong amount was entered to reset the timer so I could re-enter the correct time. The program would function as a timer that could be used in many different situations.

#### Design process

**Note** [file](Jess_Design.png)**]
 **Note** 
 
 I knew how to decrement a number through a for loop, play a tone, display an image using the leds, and check to see ifthe timer had run down to zero, but there were still obsticles that I had to tackle. First I tried to show the numbers as they were counting down, but I found that the timer ran slow. After a while I realized that the reason for this was that any number ten or above takes a longer than one second to be displayed on the screen. I then stopped displaying the numbers, but it still did not run in the correct time increments. Then the struggle I had was to make sure that the program decremented the timer at exaclty one second. The answer turned out to be pretty simple. I simply had to command the code to pause for 1000 ms. 
 
 I then wanted to display something on the screen while the program was decrementing numbers to make sure that I knew the program was running. I tried to make a sprite that ran from the top left corner to the bottom right corner one led at a time.However that also messed up the time because I created the sprite inside the for loop that counted down and I constructed the sprite by creating two for loops. The result was that the program decremented at a pace much slower than every second. I then decided to display an image while the program was running and I placed it right before the for loop that counts down. This allowed me to know that the program was running but not throw off the timer. 

 I also was not exactly sure how to allow the user to enter in hours and minutes instead of seconds. The answer was actually in simple math. For every time the hour button is pushed, I multiplied that time by (60 * 60). For every time that the minute button is pushed, I multiplied by (60 * 5). The reason I decided to multiply by five to allow the user to add five minutes each time instead of having to press the button as often to reach the desired minutes. 

 I wanted to be able to display the amount of time that the timer was set for before starting it to ensure that I had entered the correct amount. instead of  showing the seconds the timer was set for, I had it divide the amount of hours by 3600 and the amount of minutes by 60. 

 This timer allows me to reset it by shaking the microbit. This then sets the timer to 0. I can then re-enter the desired amount.
 
 
The addition of objects to the code made it to where the event handlers appear much cleaner. Not only that, but the objects can be instanciated multiple times without me having to repeat code elsewhere. The resulting project allows me to know the program was running, enter in hours and minutes, and reset the timer if I need to. 
 
 

#### JS Constructs & objects

**Note** I added objects to my code in order to make it cleaner, more efficient, and to give me practice creating custom objects. I used a for loop, an if statement, and multiple input and output statements to  create this program.

### Final project

 
 #### Goal 
 **I am in a spanish class that is introducing new terms so I wanted to make a program that helped me study as well as include all of the things that I learned over the course of this curriculum. I wanted to be able to have terms, run through them, time my ability to interpret them, and keep track of the ones that I knew. I also wanted to make it a game that I could compete with friends to see who knew more terms. 

#### Design process

!!!!!!INSERT FILE  
 I wrote down what type of code I wanted to include based on the previous lessons on a peice of paper. After that it was a matter of building a program. 
 
 I started off writing an array of Spanish words. I then made sure that I could run throught the array and display every single element in the array. This was a little more difficult only because the environment that I was writing the program in (through the microbit website) can be a bit finicky. I just reset the simulation a couple times and it finally worked the way I expected it to. I ended up writing cod ethat ran through all the elements of the array and then wrote that there were no more terms after the last element. 
 
 I wanted to include code that could interact with a servo for this project, so I started playing with the servo and realized that the one in the model only had 180 degree capacity. In earlier projects I had lookled for a way to display passing time without having to display number or strings on the screen. The 180 degree servo was a good solution. Once it reaches the end of its rotational capabilities it sets off an alarm signaling that the time I have to say that term is up. I added a way to keep track of my points. The points are indicated by one led that lights up every time a point is entered. The led travels from the top left corner to the bottom right corner one led at a time. I added a statement that caused it to be when the led reaches the very bottom right position, the program resets. At first it was not resetting when I wanted it to, but I had to keep adding points until it reset. I then checked the coordinates of the led when it reached the last position, and the y coordinate was one less than I had expected it to be. I changed my code to reflect that discovery and it worked. 
 
 I made it to where the points are displayed first in decimal, then in binary. The program is set up so that I can add a point and then chekc to see the amount of points I had. i checked the amount of points I had and the binary was correct, but then I added another point and checked again and the binary was wrong. I checked my code and realized that I was using the original variable and used it as my condition for the while loop. this meant that I was also updating it. The solution for this problem was to write a temporary variable, set it equal to the decimal amount, and use the temporary variable as my new condition and update clause. 
 
 I added the ability to send the amount of points that the user has acquired to another microbit. I made it to where I could send the number, but I needed to add a way for the receiving microbit to display that number. 
 
 The next thing I added was a boolean operaton that used the Math.randomBoolean() function to display one of two encouraging statments to myself as I studied. I also used the same function to display oneof two regular verbs. 
 
 
 #### JS Constructs & objects. 
 
 I created two objects, verb1 and verb2, to help me learn verb conjugation. Each object has the properties meaning, fullVerb, verbStem, verbEnding, and firstPerson. I used while loops,  a for loop, boolean statements,  conditional statements, input and output, an array,  and variables. This program makes use of multiple outputs through the sound, the led display, and the servo movement. 

