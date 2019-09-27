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

### v0.2

**Note:** My happy sad face project [file](happysadface.js)**]

### v0.3


**Note** My rock paper scissors project [file](rockpaperscissors.js)**]

### v0.4
**Note** My rock paper scissors pt. 2 project [file](rockpaperscissors2.js)**]

### v0.5
**Note** My demo game that contains different kinds of loops. [file](loopdemogame.js)]

### v0.6
**Note** My midterm project, described in length in the design section.[file](timer.js)]  

### v0.7
**Note** My led brightness demo project. [file](ledbrightnessdemo.js)]

### v0.8 
**Note** My double coin toss program. [file](doublecointoss.js)]

### v0.9
**Note** My transmogrifier program. [file](transmogrifier.js)]

### v0.10
**Note** My two programs for this section, marcopolo [file](marcopolo.js)] and morsecode [file](morsecode.js)]. 

### v0.11
**Note** My two programs for the Array section, starrynight [file](starrynight)] and charades [file](charades)].

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
 **Note** [the things you tried, the questions you asked yourself, the answers, the sticking points, the iterations, the restarts, the final version]**

**[etc.]**
