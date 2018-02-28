Collisions Shooter

Engineer Project Guide

**Project Description**

With JavaScript and the p5.js library, you will create a fun web-based computer game that you can share with others.

Creating computer games requires a significant amount of planning, coding, and testing, which can make even the most hardcore gamers think twice about making their own games. In order to make the process less daunting, successful game developers often break their projects into smaller, manageable chunks, completing them one at a time until the game is considered "ready". 

This is precisely what we will be doing with Collisions Shooter!

**Project Goals**

* Practice writing JavaScript with the p5.js library, incorporating the following concepts: variables, conditionals, and functions. 

* Practice working among several different technologies at once (HTML, CSS, JavaScript) to create a game that you and your friends will enjoy.

* Exercise creativity and make your project unique. 

**Project Resources**

* Reference Slides

* JavaScript Reference - Big 5 CS Concepts: 

    * [Variables](https://www.w3schools.com/js/js_variables.asp)

    * [Conditionals](https://www.w3schools.com/js/js_if_else.asp) 

    * [Functions](https://www.w3schools.com/js/js_functions.asp) 

    * Loops: [for](https://www.w3schools.com/js/js_loop_for.asp), [while](https://www.w3schools.com/js/js_loop_while.asp)

    * [Arrays](https://www.w3schools.com/js/js_arrays.asp)

* p5.js Examples of Big 5 CS Concepts: 

    * [Variables](https://p5js.org/examples/data-variables.html)

    * Conditionals: [part1](https://p5js.org/examples/control-conditionals-1.html), [part2](https://p5js.org/examples/control-conditionals-2.html)

    * [Functions](https://p5js.org/examples/structure-functions.html),

    * [Loops](https://www.youtube.com/watch?v=cnRD9o6odjk) (video)

    * [Arrays](https://p5js.org/examples/arrays-array.html)

* * *


**Table of Contents**

[[TOC]]

# 1: Setup

**Checklist**

* [Clone the starter code from GitHub](#heading=h.y09qsfhxip8z)

* [Setup index.html](#heading=h.p8d3pgfsl006)

* [Setup the canvas](#heading=h.jeitpovtxegs)

## Clone the starter code from GitHub

1. [Click this link](https://classroom.github.com/a/Tyywf1zf)** **and accept the assignment. 

*If it asks you to "Join the classroom roster", find your name in the list, and then accept the assignment (if you don’t see your name, notify your teacher). 

2. Once it says you’re all set, click where it says "Your assignment has been created here" to open the assignment repository. 

3. Clone that repository to your computer.

    1. If GitHub Classroom is experiencing trouble, you can also clone the starter code to your computer from [here](https://github.com/CodeNextEngineersG2/g2-shooter-starter).

4. Once the repository has been cloned, open the files "index.html" and “script.js” in your IDE.

If you still need help with anything git-related, please [click here](https://drive.google.com/open?id=1lt3pC-S79k6pMGs5X8OgNX2ahPDP9Vg6Fu75IkkIcGY). 

## Setup index.html

1. Open the HTML document (**index.html**) and code the boilerplate. 

2. Link to the included stylesheet (**style.css**) in your <head> element.

3. Include the scripts you see in the comment in <script> tags at the bottom of your <body> element. 

Now that we have the basic elements and scripts ready, we can start adding elements more specific to our game.

1. Above the three script elements, create an <h1> element to give your page a visible "title" (not the same as the <title> element you placed in your <head>, which is more for the browser and search engine results). 

    1. The <h1> can have any content you like, but we’ll be using "Alien Defense" for the purpose of the guide. 

2. Beneath this, create an empty <div> element that will contain the p5 canvas. We are making a game, so we’ll give this <div> the id "game-screen", since that’s where the gameplay is going to appear. 

That is all we need to do with index.html for now. 

## Setup the canvas

Open **script.js** and have a look at the variables. 

Even simple games have many variables, since there is so much to keep track of at any given moment. We’ve organized the variables into "categories" to help us keep them in order. We’ll be using all of these variables soon. But for now we only want to setup our canvas. 

Let’s begin by writing our setup() function below the relevant comment (starting on line 43). 

First, read the comment. It gives us an idea of what setup() is supposed to do.

<table>
  <tr>
    <td>/*
 * setup()
 * This function is called once. Sets up the canvas, accesses HTML elements with
 * select(), and adds event listeners to those elements. Sets initial values of
 * variables by calling resetGame().
 */</td>
  </tr>
</table>


Again, we are only concerned with setting up the canvas for now. Try coding the next few steps on your own, based on the instructions, before looking ahead at the solution.

1. Let’s initialize the canvas with a width of 500px and a height of 400px. 

2. After that, we’ll set our canvas background to a dark color (since we’re making a "space" game for now, but you can change it later). 

3. The next step involves placing the canvas into the "game-screen" <div>. At the top of the script we see that there is already a gameScreen variable. That variable needs to refer to the <div> element we identified as “game-screen”. Do you remember how to access HTML elements by their ids? You need to use the select() function. 

4. Now that gameScreen holds a reference to the HTML element, we can place our canvas inside of it. Do you remember how to place one HTML element inside another in p5?

Be sure you have saved both index.html and script.js. 

Open index.html in your browser. There’s your game screen! You can change how it looks later.

**Congratulations for completing part 1! Be sure to save your work on your computer and push to GitHub.**

* * *


# 2: Create the Player’s Ship

![image alt text](image_0.gif)

**Checklist**

* [Initialize ship variables](#heading=h.b3jezfagnmgt)

* [Write drawShip() and draw() functions](#heading=h.upn7xrbt0zkc)

* [Implement ship movement controls and boundaries](#heading=h.uyddkwjo7h41)

## Initialize ship variables

It’s time to draw the player’s ship! Note that we will represent all game objects as circles so that collision detection will be easy to implement. 

Scroll to the top of **script.js** and have a look at the ship variables. Based on their names alone, what data do you think each variable will hold?

var shipDiameter;	→The diameter of the ship	

var shipX;		→The x position of the ship

var shipY;		→The y position of the ship

var shipSpeed;		→ The speed of the ship

var shipColor;		→ The color of the ship

Exactly what they say! This is why we need to be intentional when we name our variables. Even someone who is new to our program will be able to figure out how it works because we’re using good variable names. 

Scroll back to setup(). 

1. Initialize the ship variables: **shipColor**, **shipDiameter**, and **shipSpeed** to any values you like. 

    1. Note that the color should be an actual color (a good idea would be using hex values, such as "#ff0000" for red), while shipDiameter and shipSpeed can be any numbers you like. 

2. Initialize shipX and shipY so that the ship will appear at the bottom-center of the screen, like this:

![image alt text](image_1.png)

    2. First, initialize shipX by centering the ship along the x-axis. To do so, you need to incorporate the canvas’ [width](https://p5js.org/reference/#/p5/width). 

    3. Initializing shipY is a bit trickier. Try setting it to the [height](https://p5js.org/reference/#/p5/height) of the canvas for now. 

3. To test these values, draw an ellipse beneath the code you have so far, but still within setup().

4. Continue testing values for shipX and shipY until the ship appears in the bottom-center of the screen.

    4. Hint: Subtracting half of the ship’s diameter from the height of the canvas will move the ship up.

## Write drawShip() and draw() functions

Now that we know the ship is going to start in the right place, let’s write a drawShip() function. 

Scroll down to the drawShip() comment and read it.

<table>
  <tr>
    <td>/*
 * drawShip()
 * This function draws the player's ship. It also controls the ship's
 * x value by checking if the player is holding down the left or right keys.
 */</td>
  </tr>
</table>


We’ve already written some of this function already! 

1. Cut and paste the ellipse() call you wrote in setup and place it within this function. 

2. Also make sure the ship is the color you specified by adding a call to fill(shipColor) above the ellipse() call, just as you did in setup().

3. To make the ship appear now, we need to call drawShip() within the draw() function. That means we need to write the draw() function itself. draw() is a special function that is called automatically, over and over again in an endless loop.

Be sure to test your draw() and drawShip() functions before moving on. You should see your ship appear in the bottom-center of the screen. 

## Implement ship movement controls and boundaries

The ship is just sitting there being unresponsive. Let’s make it move! 

We want the ship to move left when the player holds down the left arrow key, and right when the player holds down the right arrow key. 

"Moving left" and “moving right” requires us to make adjustments to shipX, according to the canvas’ coordinates. We subtract from shipX to move the ship left, and add to shipX to move it right. 

![image alt text](image_2.png)

Head back to drawShip(). Let’s handle moving left first. 

1. Within this function, above the fill() line, add an if-statement that checks if the player is holding down the left arrow key. If the player is holding down LEFT_ARROW, we want to subtract shipSpeed from shipX. 

1. Save and refresh your browser. Press the left arrow key on your keyboard. What happens to your ship?

![image alt text](image_3.png)

The ship moves left, but it leaves a "trail" behind. Remember that draw() is repeatedly running in an endless loop. This means right now it’s calling drawShip() over and over. 

Puzzled? Here’s an explanation. When the program runs, it draws a ship at the location (shipX, shipY). When you press the left arrow key, shipX decreases by shipSpeed. Draw calls drawShip() again, which draws the ship at the new location, (shipX - shipSpeed, shipY). However, the "old ship" is still at (shipX, shipY) from the previous call to drawShip()! 

Therefore, we need to wipe the screen at the start of every draw() loop. That way, the "old ships" will be erased each time, giving us the illusion of motion (i.e., animation!). 

1. To wipe the screen each time through the draw() loop, call background([color]) on the first line of draw(). This "paints" the canvas whatever color you specify within background(). 

Test your game. No more trail! 

However, you might notice that when you hold the left arrow key long enough, the ship leaves the canvas (in video game terms, we’d say the ship is "off-screen"). 

We need to create a boundary on the left side of the canvas that the ship can’t go beyond. In other words, we want to subtract shipSpeed from shipX if the player is holding down the left arrow key AND shipX is greater than the left boundary of the screen. 

We have shipX, which represents the X location of the ship. But what value represents the left boundary of the canvas? Refer back to the canvas coordinates image once more. What value does the X axis have at the origin?  

1. Modify the if-statement within drawShip() such that it also checks if the ship’s X coordinate is beyond the left side of the canvas.

We see that your ship can no longer move off-screen - not the *entire *ship at least...

![image alt text](image_4.png)

The left-half of the ship is being cut off! 

1. Adjust drawShip()’s conditional statement such that the ship isn’t cut in half at the left edge of the screen.

    1. We’ve solved a very similar problem, only with shipY in setup(). 

    2. In this case, we want to move the ship to the *right*, and define that as the "actual" left boundary. 

Completing step 6 above should result in this happening when the ship is moved to the left-boundary of the canvas:

![image alt text](image_5.png)

Once you are satisfied with the ship’s left movement, let’s begin making it move right. 

Moving the ship to the right will be almost identical to how it moves left, with only minor differences:

* First, we will check if the player is holding down the right arrow key AND if the shipX is less than the width of the screen. 

* Then we will ADD shipSpeed to shipX.

1. In drawShip(), create an else-if-block that makes the ship move right when the right arrow key is pressed. 

    1. To move the ship using the right arrow key, we can follow the same steps for coding the left arrow key. Since we are checking for the right boundary instead of the left boundary, we can replace that value with the value for the right boundary.

    2. Since we already created an if statement for the left boundary check, we can use an else if statement for the right boundary check. This helps our program because if the first if statement has already been evaluated as "true" then the else-if statement will be skipped. We know that if we are pressing the left arrow key, the right arrow key is not being pressed, and vice versa.

Our ship is now fully animated, controllable, and it stays within the boundaries of the screen.

**Congratulations for completing part 2! Be sure to save your work on your computer and push to GitHub.**

* * *


# 3: Implement Ship’s Shooting Mechanic

![image alt text](image_6.gif)

**Checklist**

* [Plan the shooting mechanic](#heading=h.lspfgojfmx9v)

* [Draw the bullet](#heading=h.ybc2iy2z4d24)

* [Animate the bullet](#heading=h.4xmd5fgii817)

## Plan the shooting mechanic

Let’s make the ship shoot. Take a look at the bullet variables at the top of **script.js**.

<table>
  <tr>
    <td>// Bullet Variables
var bulletDiameter;
var bulletX;
var bulletY;</td>
  </tr>
</table>


There will only be one bullet, as indicated by the single x and y variables. 

Before we jump into programming, let’s plan how shooting will work in our game.

* The ship will shoot a bullet when the spacebar is pressed.

* We want the bullet to have a certain diameter. Thankfully we already have a variable that will hold that value (bulletDiameter). 

* Once fired, the bullet should start where the ship is (shipX, shipY).

* Then, the bullet should move up (bulletY -= some value) until it reaches the top of the screen (bulletY <= 0) OR hits an alien. In either case it will "disappear".

* Since we only have one bullet, the player is not allowed to shoot more than one at a time. If there is a bullet on-screen, the player cannot shoot another until the bullet contacts an alien or reaches the top of the screen. Therefore, we need some way to check if a bullet is currently on-screen so we can "lock" the ship’s cannon. 

It’s good that we took time to plan these mechanics before getting into the code. This will save us quite a bit of time while we’re programming, just like laying out and measuring the ingredients for a recipe saves us time while cooking! "A day in the library can save you a week in the laboratory", as the saying goes.  

## Draw the bullet

Let’s draw the bullet.

1. Within setup(), initialize the bulletDiameter variable to any value you like. Keep in mind that the bullet size directly impacts the difficulty of your game! 

We won’t initialize the bulletX and bulletY variables here because they are dependent on the location of the ship. 

The next part is special. Remember from our planning phase, we want the bullet to shoot when the spacebar is pressed. The first step of "shooting" will be placing the bullet exactly where the ship is located. 

Unlike the ship’s movement, we won’t use [keyIsDown()](https://p5js.org/reference/#/p5/keyIsDown) with shooting since we don’t want a rapid fire. Instead, we’ll write a separate [keyPressed()](https://p5js.org/reference/#/p5/keyPressed) function that takes care of this. 

Scroll to the keyPressed() comment and have a look.

<table>
  <tr>
    <td>/*
 * keyPressed()
 * This function runs automatically when the player presses the spacebar
 * (keyCode === 32). If they do, and a bullet is not currently being fired
 * ("shipShooting" variable is false), it positions the bullet relative to the
 * ship. Then it sets the "shipShooting" variable to "true", indicating a ship
 * bullet is currently being fired.
 */</td>
  </tr>
</table>


Here, the number 32 is the [ASCII](http://www.asciitable.com/) encoding for the spacebar. 

Also there’s some important new JavaScript syntax here. We use the [triple equals comparison operator](https://www.w3schools.com/jsref/jsref_operators.asp) (===) to check if the key being pressed is equal to the *number *32 as opposed to, say, the *string *"32". That is, the double equals comparison operator (==) only checks if the left and right have the same *value*, while the triple equals sign compares values and *types*, making it a more strict comparison operator (and p5 requires this kind of comparison for keyCodes). 

For example:

* 32 == "32" // true

* 32 === "32" // false

1. Write the keyPressed() function such that it if the spacebar is pressed, the bullet’s X and Y variables are set to the ship’s corresponding X and Y variables.

Now that we have a way for the ship’s bullet to appear where the ship is (i.e., when space is pressed), let’s actually draw the bullet. 

Scroll to the drawBullet() comment and take a look.

<table>
  <tr>
    <td>/*
 * drawBullet()
 * This function draws a bullet. It also checks to see if the bullet has hit
 * the alien. If it has, the alien is reset to the top-left of the screen
 * and the player earns a point. The alien also becomes faster (i.e., harder
 * to hit) each time it is hit by a bullet.
 */</td>
  </tr>
</table>


Most of this is irrelevant to us since we don’t have an alien or a scoring system yet. But we’ll definitely come back to this later. 

1. Write the drawBullet() function. For now, just call fill() and ellipse(). 

    1. Be sure to use the bulletX, bulletY, and bulletDiameter variables within the call to ellipse(). 

    2. The bullet can be any color you like.

    3. You can use noStroke() before the call to ellipse() if you want the bullet to appear as "pure energy" (i.e., no outline). 

A bit of programming logic comes next. Again, the ship has just one bullet. That means that when that bullet has already been shot, the ship can’t shoot again until the bullet hits an alien or goes off screen, in either case allowing the ship to reload and shoot again.

When the ship shoots a bullet, we can say the ship’s "shooting state" is true. Therefore, when spacebar is pressed, we set the game variable “shipShooting” to true, which should then allow draw() to draw the bullet by calling drawBullet().

If that sounds confusing, don’t worry. We’ll take it step by step. 

1. Initialize our shipShooting variable to false in setup() because the game starts off without the bullet having been shot yet. 

2. In the keyPressed() function, set the shipShooting variable to true when the spacebar has been pressed.

Now we want to draw the bullet on the screen. The draw() function does that for us. But we don’t want the bullet to *always *be on the screen. It should only appear when shipShooting is set to true. 

3. Beneath all the other code in draw(), add an if-block that calls drawBullet() when shipShooting is true.

Save and refresh your browser. Press the spacebar. 

![image alt text](image_7.png)

There’s the bullet! It isn’t moving but it’s certainly there. You can keep pressing space as you move the ship left and right and watch the bullet "teleport" to the ship’s location.

## Animate the bullet

Let’s animate the bullet now. Head back to drawBullet().

First, let’s make the bullet "go up" each time it is drawn in the draw() loop. What value do we need to change to make the bullet “go up”? 

Let’s experiment. 

1. Add the following to drawBullet().

<table>
  <tr>
    <td> function drawBullet() {
   //snip
   bulletY -= 10;
 }</td>
  </tr>
</table>


Save and refresh your browser. Press the spacebar. The bullet is moving! Great!

![image alt text](image_8.gif)

There are two problems with this, though. 

* Press the spacebar rapidly and you’ll nice that it "teleports" back to the ship rather than stay on its path to the top of the screen. 

* The bullet never stops moving up, even when it reaches the top of the screen. That is, the bullet is still moving, even off-screen, which is potentially a waste of our computer’s resources. We want the bullet to stop being drawn once it reaches the top of the screen.

Let’s solve the first problem by making it so that when we hit the spacebar, nothing happens unless the ship is not currently shooting a bullet. 

1. In keyPressed(), add an AND (&&) to the if-statement that also checks if the ship is NOT shooting a bullet.

    1. Hint: We already have a variable that represents if the ship is shooting. How would you check if that variable is false?

Save and try it out. Cool! 

However, you’ll notice that you are no longer allowed to fire any bullet beyond that first one. This is because, besides our within our setup() function, we never set shipShooting to false anywhere else in our code. Once shipShooting is set to true (when the spacebar is pressed) it remains that way forever. Oops! 

Let’s fix that by also fixing our second problem, which was that the bullet keeps going beyond the top of the screen.

Back in drawBullet(), we want to draw a bullet ONLY if the bullet itself is below the top of the screen. Once the bullet reaches the top of the screen, we set shipShooting to false, stopping draw() from calling drawBullet() (i.e., the bullet itself is no longer drawn) and allowing us to "reload" and shoot again.

2. Add an if-block to drawBullet() that wraps around all the code currently within that function. The if-statement itself should check if bulletY is not yet to the top of the screen. If so, we run all the code that actually draws the bullet.

    2. Hint: the top of the screen is 0, so we want to check if bulletY is greater than 0. 

3. Add an else-block below the if-block above, such that if the bullet has reached the top of the screen, we set shipShooting to false. 

The ship can now shoot! 

One very last thing. You might notice that the bullet begins at the *center *of the ship. Ideally, it would be better if the bullet started at the *top *of the ship, since that’s most likely where the cannon is located. Feel free to try solving this problem now, or come back to it later (see [this challenge](#heading=h.6b556ixnpmp0)).

**Congratulations for completing part 3! Be sure to save your work on your computer and push to GitHub.**

* * *


# 4: Create the Enemy ("Alien")

![image alt text](image_9.gif)

**Checklist**

* [Draw the alien](#heading=h.jwkjl2383weo)

* [Animate the alien](#heading=h.k8fsc7og3gl)

## Draw the alien

Now it’s time to add the alien to our game. Scroll to the top of **script.js** and take a look at the alien variables. 

<table>
  <tr>
    <td>// Alien Variables
var alienDiameter;
var alienX;
var alienY;
var alienVelocity;</td>
  </tr>
</table>


You’ll notice that the alien’s variables look almost exactly like the ship variables, except instead of "speed" we have “velocity”. What is the difference between these? We’ll find out in a second.

For now, let’s initialize the alien’s variables in our setup() function, beneath all the code already there. 

1. Initialize alienDiameter to any value you like (this determines the size of the alien, so be careful). 

2. Initialize alienVelocity to 10. You can change this later, so let’s just use 10 as a nice starting point.

For alienX and alienY, let’s say we want the alien to appear at the top-left corner of the screen when the game starts. What canvas coordinates represent the top-left corner? (0, 0)! 

However, we know that our alien, like everything else in the game, will be an ellipse. We’ve already seen that an ellipse’s X and Y coordinates are located at its center. That means placing an ellipse in the top-left corner (0, 0) will have this effect:

![image alt text](image_10.png)

So, just like with the ship, we need to offset the alien’s X and Y coordinates relative to its diameter. Note that this is a very similar problem to the one we faced when trying to position the ship! 

1. Within setup(), initialize shipX and shipY such that the entire alien appears at the top-left corner of the screen. 

Now we can actually draw the alien. Scroll until you see the drawAlien() comment and read it.

<table>
  <tr>
    <td>/*
 * drawAlien()
 * This function draws an alien. It also checks to see if the alien has touched
 * the player's ship. If it has, the function calls gameOver().
 */</td>
  </tr>
</table>


The "touches the player’s ship" part will be a bonus challenge you can complete later. For now, let’s just draw the alien without any animation. The alien can be any color you like. 

2. Complete drawAlien() such that it draws an ellipse() based on the alien’s X, Y, and diameter variables. 

    1. Be sure to make a call to fill() before calling ellipse() so the alien is drawn with the color you like.

3. Call drawAlien() in draw(), directly beneath drawShip() and before the code that checks if the ship is shooting. 

Save and refresh your browser. 

![image alt text](image_11.png)

Behold! An alien, ready to destroy planet Earth. Well, not quite yet!

## Animate the alien

Let’s make our alien move left and right automatically. 

Our alien will move in a very predictable manner. It will start by moving right. When it reaches the right-edge of the screen, it will move left. When it reaches the left-edge of the screen, it will move right, and so on and so forth. You can add other features to the alien’s movement (e.g., moving down, or moving less predictably) later! 

Head back to drawAlien(). Since we’ve already coded a very similar function for our ship, we can jump right in. 

1. Make the alien move right each time drawAlien() is called. You should do this in a single line of code.

    1. Hint: Try adding alienVelocity to alienX on the very first line of the function, above all other code there.

Save and refresh your browser. Great! 

![image alt text](image_12.gif)

The alien isn’t stopping, obviously. It proceeds directly off the canvas and off-screen! 

Instead, we want the alien to "bounce" off the right edge of the canvas. This means when the alien’s X value *is greater than or equal to* the width of the screen (minus half the diameter of the alien, to prevent that half from getting cut off at the right), we want to REVERSE the direction it is traveling in. 

Within drawAlien(), do the following:

1. Directly beneath the line of code you produced in step 1 above, and above the rest of the code in the function, write an if-block that checks if the alien’s X value is greater than or equal to the width of the canvas. The if-block won’t have any code just yet, only the if-statement itself.

2. Be sure to also account for half of the alien getting cut off at the right. 

    1. Hint: You’ll need to offset the width of the canvas by subtracting half of the alien’s diameter from it.

Now we need to ask ourselves what we mean by "reverse the alien’s direction". This is where velocity comes in. 

Speed is purely the change in distance of an object over time (e.g., miles per hour). You can’t have "negative speed" since you can’t have “negative distance” or “negative time” (speed = distance / time). Therefore, speed is always a positive number (think [absolute value](https://www.mathsisfun.com/numbers/absolute-value.html)) that expresses the magnitude of change and nothing else.  

[Velocity is more specific than speed](https://www.universetoday.com/89424/what-is-the-difference-between-speed-and-velocity/). Typically we define velocity as "speed in a certain direction", where “direction” for us will mean a positive or negative value. 

For example, if we want to move the alien right, we make alienX positive. If we want to move the alien left, we make alienX negative. A velocity of 0 means the alien isn’t moving at all. 

We initialized velocity to 10 in our setup() function. Based on this, what direction do you think the alien will start moving? To the right! And fairly quickly at that.

To make the alien move left at the same rate, we simply multiply the velocity by -1, which will give us -10. Want the alien to move right again? Multiply -10 by -1 and you get 10. 

1. Within the if-block you wrote in the last step, write code that reverses the alien’s direction of movement, based on its velocity. You should do this in one short statement. 

But how do we get it to "bounce" off the left wall? First, what would that condition look like? What are we checking for? If alienX is *less than or equal to* the left edge of the canvas, represented by the x-coordinate 0. 

So essentially we are going to reverse directions if EITHER of these cases are true:

* alienX is greater than or equal to the width of the canvas (minus half the diameter of the alien)

* alienX is less than or equal to 0 (minus half the diameter of the alien).

1. Complete the if-statement you wrote above such that it also checks if the alien is at or beyond the left side of the canvas.

    1. Hint: You will need to add an OR (II) to the if-statement. [Click here](https://www.w3schools.com/js/js_comparisons.asp) for a review of this and other operators.

Just in case you are wondering, we are checking for "less/greater than or equal to" instead of simply “equal to”  just because we want to account for situations where the alien might go slightly beyond either boundary of the screen (e.g., if the velocity is a very high number, it’s next step  might cause it to jump 50 pixels to the right of the canvas). 

You now have an alien that moves left and right across the screen! 

**Congratulations for completing part 4! Be sure to save your work on your computer and push to GitHub.**

* * *


# 5: Implement the Alien’s Shooting Mechanic

![image alt text](image_13.gif)

**Checklist**

* [Draw and animate the alien bullet](#heading=h.hkcbuppr2gt4)

* [Make the alien shoot randomly](#heading=h.ymgo5levrnlr)

## Draw and animate the alien bullet

This part will be the simplest of them all. We’ve already mastered the art of drawing and animating bullets on the canvas. All we need to do is make it happen automatically, since the alien will have its own "intelligence" if you can [suspend your disbelief](https://en.wikipedia.org/wiki/Suspension_of_disbelief) for a moment. 

Unlike the ship’s bullet, the alien’s bullet will be moving down instead of up. Otherwise, everything else will be roughly the same. 

Let’s first take a look at the alienBullet variables at the top of **script.js**. These should look very familiar! 

<table>
  <tr>
    <td>// Alien Bullet Variables
var alienBulletDiameter;
var alienBulletX;
var alienBulletY;</td>
  </tr>
</table>


Also take a look at the alienShooting variable under "Game Variables". Can you guess what this will be used for?

Head to setup().

1. Initialize alienBulletDiameter beneath the rest of the code within setup(). We want the alien’s bullet to be somewhat small (e.g., 15 pixels in diameter) or the game will be too hard. But really it’s up to you!

2. Initialize alienShooting to false, just as we did with shipShooting. 

Drawing and animating the alien’s bullets will be a lot more straightforward than it was for the ship. For one, we won’t need to check for keypresses. 

Find the comment for drawAlienBullet() and read it. 

<table>
  <tr>
    <td>/*
 * drawAlienBullet()
 * This function behaves much like drawBullet(), only it fires from the alien
 * and not the player's ship. If the bullet hits the player, it's game over.
 */</td>
  </tr>
</table>


We’ll cover "hits the player" later, since that involves collision detection. For now, let’s just draw the bullet. 

The code for this function will look almost identical to drawBullet(), with some key differences:

* We draw the alien’s bullet if alienBulletY is *less than the height* of the canvas (the ship’s bullet was drawn so long as it was greater than 0, or the top of the canvas). Why might this be? 

* We’re *adding *to alienBulletY, instead of subtracting as we did with the shipBulletY. Why? 

1. Complete drawAlienBullet() such that it draws the alien’s bullet if alienBulletY is less than the height of the canvas. You should also add 10 to alienBulletY each time this condition is met, which will allow the bullet to travel up.  

    1. Try to give the alien’s bullet a different color so you can distinguish it from the ship’s bullet! 

2. Be sure to also write an else-block that sets alienShooting to false (that is, when the alien’s bullet has surpassed the height of the screen, the alien is allowed to "reload" and shoot again). 

    2. Hint: Again, this code is roughly identical to the drawBullet() function you wrote before, so use that as a starting point. Just be mindful of the differences mentioned above! 

## Make the alien shoot randomly

Now head back to drawAlien(). As part of the alien’s animation cycle, it will also shoot a bullet. This means we’ll need to add code to this function that sets alienShooting to true if it is currently false… but it should only do so *randomly*.

Let’s say we want the alien to shoot a bullet about 25% of the times drawAlien() is called. One way to do this is through pseudorandom number generation.

Let’s try it. Add the following to drawAlien(), below all the code you already have there: 

<table>
  <tr>
    <td>function drawAlien() {
  //snip
  if(random(4) < 1 && !alienShooting) {

  }
}</td>
  </tr>
</table>


The [random()](https://p5js.org/reference/#/p5/random) function is built into p5. It can be called in several ways, but the way we called it here, it simply gives us a pseudorandom floating point number (in other words, a decimal value) between 0 and up to but not including the input. 

We say "pseudo" (pronounced “sudo”, Greek for “fake”) because the numbers are not actually random. Computers are by nature deterministic, and therefore incapable of behaving “randomly” without some external random force (e.g., a baby smashing keys on a keyboard). Instead, they generate a number that “seems” random based on algorithms. If you are interested in this, [check out this link](http://whatis.techtarget.com/definition/pseudo-random-number-generator-PRNG). Otherwise, it’s good enough to accept that the number is “random enough” for us. 

Our call to random() generates random floats between 0.0 and 3.999…9. Therefore, we have a 25% chance of generating a value less than 1 (0.0 to 0.999...9). This gives us the 25% chance we were looking for. Also, we’re making sure the alien is not currently shooting a bullet, just as we did with the ship. 

Now, within the if-block itself, we need to "teleport" the alienBullet to the alien’s current location, then set alienShooting to true. 

1. Within the if-block for drawAlien(), set the alien’s bullet to the alien’s location, and set alienShooting to true. 

Our final step is to call drawAlienBullet() in our draw() function, but only when alienShooting is true. Therefore, this will be exactly like how we called drawBullet() there.

1. Within draw(), beneath all the code there, create an if-block such that if alienShooting is true, drawAlienBullet() is called.

Save and test your work in the browser. The alien is trying to shoot you! Dodge the bullets as best you can, and also try to hit the alien.

**Congratulations for completing part 5! Be sure to save your work on your computer and push to GitHub.**

* * *


# 6: Implement Collision Detection

![image alt text](image_14.gif)

**Checklist**

* [Write the checkCollision() function](#heading=h.pqljj2ei2iv2)

* [Shoot the alien](#heading=h.wrg2mvdgxuij)

* [Write the resetAlien() function](#heading=h.ogfrhmbtm196)

* [Shoot the ship](#heading=h.yfy4srlikb6e)

* [Write the gameOver() function](#heading=h.1ud34280ey1)

## Write the checkCollision() function

Open **script.js** and scroll until you see the comment for a "checkCollision()" function.

<table>
  <tr>
    <td>/*
 * checkCollision(aX, aY, aD, bX, bY, bD)
 * This function first calculates the distance between two circles (a and b) based on
 * their X and Y values. Based on the distance value, the function returns
 * "true" if the circles are touching, and false otherwise.
 * Circles are considered touching if
 * (distance <= (circle a diameter + circle b diameter) / 2)
 */</td>
  </tr>
</table>


Writing this function will essentially be like "teaching" the program how to detect collisions. As usual with programming, we need to spell out even the simplest things! Doing so is good for us, though, since it allows us to reflect on what it even means for things to “touch”. Once we understand this, we become better equipped to learn more complex game mechanics!

A common strategy programmers use when encountering a problem like this is writing [pseudocode](http://www.unf.edu/~broggio/cop2221/2221pseu.htm) (there’s that word "pseudo" again). Pseudocode allows us to write programming logic quickly, without getting tripped up by syntactical details of any particular language. It’s essentially like writing a detailed outline, like you would before starting an essay for school. 

Here is an example pseudocode solution for this problem:

<table>
  <tr>
    <td>if a touching b
  return true
else
  return false</td>
  </tr>
</table>


Simple! 

But what do we mean by "[return](https://www.youtube.com/watch?v=qRnUBiTJ66Y)"? Functions in computer programming are a lot like functions in algebra. They can have many inputs, but only one output. In this case, my checkCollision() function will have six number inputs (aX, aY, aD, bX, bY, bD) and one boolean output (true or false). “Return”, in other words, is “spitting out” a boolean type output. That output is meaningless unless something else “receives” it. We’ll see where the output is “received” in a little bit.

Let’s translate our pseudocode into JavaScript! Beginning with the function declaration:

<table>
  <tr>
    <td>function checkCollision(aX, aY, aD, bX, bY, bD) {

}</td>
  </tr>
</table>


As you can see, this function accepts six arguments:

* aX, aY, and aD pertain to the X, Y and diameter of "circle a"

* bX, bY, and bD pertain to the X, Y, and diameter of "circle b". 

Note that, as with everything else we’ve done with circles in p5, X and Y pertain to the *center point *of a circle. This is important because p5 has a built-in function called [dist()](https://p5js.org/reference/#/p5/dist) that can give us the distance between two points in pixels. Here’s how we would use it in our checkCollision() function:

<table>
  <tr>
    <td> function checkCollision(aX, aY, aD, bX, bY, bD) {
   var distance = dist(aX, aY, bX, bY);
 }</td>
  </tr>
</table>


We just said that dist() gives us the distance between two points. But if we only used this value to determine if two circles are touching, they would only be considered touching if their center points (or "origins") touched! 

This is a really important concept. Let’s illustrate it a bit:

![image alt text](image_15.png)

In this graphic, we can clearly see that the two circles are touching. But their center points are *not *touching. So calculating the distance between the center points alone won’t tell us if the circles are touching.

However, this graphic also shows us that IF the distance between the center points (a) is *less than or equal to* the sum of the radiuses (r) of the circles, THEN the circles are touching. 

Sound familiar? This is the same thing you see in the comment:

<table>
  <tr>
    <td> * Circles are considered touching if
 * (distance <= (circle a diameter + circle b diameter) / 2)</td>
  </tr>
</table>


We’re using diameters instead of radiuses since that’s the information we’re given in our program. No problem, all we have to do is cut the sum in half to get the same result. Another way of writing this would be (circle a  diameter / 2) + (circle b diameter / 2). In our example we factored out the 2 but either way is fine. 

1. Complete checkCollision() such that if the two input circles are touching, the function returns true. Otherwise the function returns false.

## Shoot the alien

Now that we have collision detection, it’s time for some action-packed gameplay! This step is fairly deep so we’ll write most of it together. 

Scroll to the drawBullet() function and read the comment once more to get a sense of what it does.

<table>
  <tr>
    <td>/*
 * drawBullet()
 * This function draws a bullet. It also checks to see if the bullet has hit
 * the alien. If it has, the alien is reset to the top-left of the screen
 * and the player earns a point. The alien also becomes faster (i.e., harder
 * to hit) each time it is hit by a bullet.
 */</td>
  </tr>
</table>


Let’s start with the simplest thing: right now the bullet goes through the alien. We want it to stop animating when it hits the alien. 

The first thing we need to do, then, is determine if the bullet has hit the alien. Luckily we just wrote a function that will tell us this! Let’s call it. 

Insert the following on the first line of your drawBullet() function:

<table>
  <tr>
    <td>function drawBullet() {
  var hitAlien = checkCollision(alienX, alienY, alienDiameter, bulletX, bulletY, bulletDiameter); 
  //snip
}</td>
  </tr>
</table>


Based on how we wrote the checkCollision() function, the hitAlien variable will have a boolean value. This is why we made checkCollision() return true or false!

The next step is modifying the code that’s checking if the bullet should keep moving, so that it also checks if the bullet has not yet hit the alien:

<table>
  <tr>
    <td>function drawBullet() {
  var hitAlien = checkCollision(alienX, alienY, alienDiameter, bulletX, bulletY, bulletDiameter); 
  if(bulletY > 0 && !hitAlien) {
    //snip
  }
  //snip
}</td>
  </tr>
</table>


The ! in front of the hitAlien means NOT. It’s a shorter way of expressing hitAlien == false

With this, the bullet will continue moving so long as it has not reached the top of the canvas or hit the alien. But now we need to determine what should happen if the alien *is *hit. 

Let’s create an else-if block directly beneath the if-block, like this:

<table>
  <tr>
    <td>function drawBullet() {
  var hitAlien = checkCollision(alienX, alienY, alienDiameter, bulletX, bulletY, bulletDiameter); 
  if(bulletY > 0 && !hitAlien) {
    //snip
  }
  else if(hitAlien) {

  }
  else {
    shipShooting = false;
  }
}</td>
  </tr>
</table>


Based on this function’s comment, there are actually many things we want to do when the ship’s bullet hits the alien. A few of those things we’ll implement later. For now, let’s just do a few basic things:

* First, the alien should disappear and reappear at the top-left of the screen.

* Second, it should "move faster". But what does that mean? 

* Third, the player should be allowed to shoot again immediately. What variable is controlling the player’s ability to shoot again? 

Let’s try it like this:

<table>
  <tr>
    <td>else if(hitAlien) {
  resetAlien();
  alienVelocity++;
  shipShooting = false;
}</td>
  </tr>
</table>


Here’s how it works:

* First, we reset the alien by calling resetAlien(). Of course, we haven’t defined that function in our script yet, so we’ll need to do that soon.

* Second, we [increment](https://www.w3schools.com/jsref/jsref_operators.asp) alienVelocity. Remember, that variable represents how fast the alien is moving in a certain direction. 

    * But wait, if we increment alienVelocity and the alien is moving left (i.e., alienVelocity is negative), won’t that actually make it slow down? We’ll account for this in a split second, so hang tight.

* Last, we set shipShooting to false, which allows the player to shoot another bullet immediately after the alien has "died". 

## Write the resetAlien() function

Now let’s write resetAlien(). Scroll to the resetAlien() comment and have a read.

<table>
  <tr>
    <td>/*
 * resetAlien()
 * This function sets the alien to its original position at the top-left of
 * the screen. It also sets its velocity to its absolute value (so, if the
 * velocity was negative when it died, it becomes positive upon reset, making
 * it always start by moving to the right).
 */</td>
  </tr>
</table>


This is a very straightforward function. The tricky part will be setting velocity to its absolute value. Luckily, this easily done with p5’s [abs()](https://p5js.org/reference/#/p5/abs) function. 

1. Write the resetAlien() function, according to the instructions provided in the comment. 

    1. Hint: Refer to setup() to get the original values of alienX and alienY.

Setting the alien’s velocity to its absolute value actually solves the problem we had in drawBullet() with "incrementing a negative number". Since we increment alienVelocity *after *calling resetAlien(), we know we are always going to have a positive value at that point, making the increment work as intended. Cool!

It’s time to test the game! Save everything and open up the web page in your browser. Shoot the alien a few times (if you can!) and see what happens! Not only does he reset, but he gets faster each time he dies! Indeed, this is a formidable foe! Killing him only makes him stronger!

Note that if you’re very good at the game, you might notice it start glitching once the alien’s velocity reaches a really high number (or if you set the alien’s initial velocity to a really high number). Why do you think that is? What might you do to fix this glitch? You’ll have an opportunity to account for this on your own later. Just something to think about for now! 

## Shoot the ship

Time for the alien to fight back! 

Scroll to drawAlienBullet() and read the comment once more.

<table>
  <tr>
    <td>/*
 * drawAlienBullet()
 * This function behaves much like drawBullet(), only it fires from the alien
 * and not the player's ship. If the bullet hits the player, it's game over.
 */</td>
  </tr>
</table>


For now, let’s just add collision detection. To start, we’ll create a variable called "hitShip" that represents if the ship was hit. Then we’ll add that to the condition that determines if the alien’s bullet should continue moving or not. Sound familiar? 

1. Create a hitShip variable at the top of drawAlienBullet(), similar to how we created hitAlien in drawBullet(). 

    1. Be sure to place the correct arguments in the checkCollision() function. Namely, what are the two circles we are checking for a collision? 

2. Modify the condition in the if-block that determines if the alien’s bullet should continue animating, such that it also checks if the ship has not been hit. 

Finally, much like we did with drawBullet(), we need to create a condition for when the alien bullet actually hits the player’s ship. When this happens, we make a call to gameOver(), a function we will define next.

1. Within drawAlienBullet(), create an else-if block such that if hitShip is true, gameOver() is called.

## Write the gameOver() function

Scroll to the gameOver() function comment and read it. 

<table>
  <tr>
    <td>/*
 * gameOver()
 * This function stops the game from running and shows an alert telling the
 * player what their final score is. Finally it resets the game by calling
 * resetGame()
 */</td>
  </tr>
</table>


Some of what you see here will be implemented later. For now we just want this function to do two things:

* Create a "game over" alert message in the browser.

* Call setup() to return the game to its initial state.

As you can see, this is a very simple function.

1. Write the gameOver() function such that, when called, it creates a browser alert message (e.g., "Game over!") and then calls setup(). 

    1. [Here is some documentation](https://www.w3schools.com/jsref/met_win_alert.asp) on how to create an alert.

Save and refresh your browser. Watch what happens when the alien lands a shot on the ship!

With the completion of part 6, your game is now fully functional and might even be considered an [alpha version](https://upload.wikimedia.org/wikipedia/commons/0/07/Software_dev2.svg) at this point. Good work! 

Our final step will be adding a few finishing touches on the game to make it more enjoyable for players.

**Congratulations for completing part 6! Be sure to save your work on your computer and push to GitHub.**

* * *


# 7: Finishing Touches

![image alt text](image_16.gif)

**Checklist**

* [Setup score display in index.html](#heading=h.5jy2xbi4j5xt)

* [Initialize scoreDisplay and score variables in script.js](#heading=h.je2iscjht4b6)

* [Increment score when alien is shot](#heading=h.51e7ikyodpl1)

* [Write the resetGame() function](#heading=h.122f0y4xkjz6)

* [Modify draw() to check if game is running](#heading=h.m4gf3dfk3mai)

* [Modify gameOver() to call resetGame() instead of setup()](#heading=h.2kk4wiqj3hd7)

* [Modify keyPressed() to check if game is running](#heading=h.s9pgmy8qrbn)

## Setup score display in index.html

Let’s add a scoring system to our game. The scoring system will work like this:

* Points will be displayed on the page while the game is being played.

* Each time the player shoots the alien, a point is earned.

* Points will be reset to 0 when the player loses.

Open **index.html**. 

Within the empty "game-screen" <div>, we will create an <h2> element that will display the score to the player.

The <h2> element will be written like this:

* We will first have the word "Score:", which is just there to indicate what the number to the right of it means.

* We’ll then have an empty <span> element that will display the actual score as a number.

* The <span> will have the id "score-display". 

Add the following within your "game-screen" <div>:

<table>
  <tr>
    <td><div id="game-screen">
  <h2>Score: <span id="score-display”></span></h2>
</div></td>
  </tr>
</table>


Save and open the web page in your browser. You should now see the word "score", but no number next to it. Let’s fix that!

## Initialize scoreDisplay and score variables in script.js

Return to **script.js**. If you take a look at the variables beneath "Game Variables" at the top of the file, you’ll notice that a “score” variable already exists. Above that, under UI variables, you see another variable called “scoreDisplay”. We’ll need both for what we’re about to do.

Our first step will be to initialize these variables in setup(). Let’s begin with scoreDisplay. 

Immediately beneath the line where we place the canvas inside the game-screen <div>, we need to make it so our scoreDisplay variable has access to the score-display <span> element. Just as we did with the game-screen <div> element, we can use p5’s [select()](https://p5js.org/reference/#/p5/select) function. 

Insert the following: 

<table>
  <tr>
    <td>function setup() {
  // snip
  canvas.parent(gameScreen);
  scoreDisplay = select("#score-display");
  shipColor = "#00ff00";
  // snip
}</td>
  </tr>
</table>


Next, we want to initialize score to 0 when the game begins. We also want the <span> to display what the score is at this point. Insert these two lines at the end of setup():

<table>
  <tr>
    <td>function setup() {
  // snip
  score = 0;
  scoreDisplay.html(score);
}</td>
  </tr>
</table>


If you’re curious about how p5’s html() function works, [click here](https://p5js.org/reference/#/p5.Element/html). The short of it is that we are essentially setting the content of the <span> element (which we accessed through the select() function) to the value of the score variable.

Save and refresh your browser. There is a 0 next to the score label now. Great!

## Increment score when alien is shot

The final step to our scoring system will be to make it work! 

The player earns points when the ship’s bullet hits the alien. 

Therefore, we should head to drawBullet() and locate the block of code that executes when the player hits the alien, beginning with else if(hitAlien).

All we need to do here is add two lines of code: one that increments the score, and another that updates the score display. Based on work we’ve done so far, you already know how to increment a variable (++) as well as how to set an HTML element’s content to the value of the score variable (with the html() function). 

1. Within drawBullet(), add two lines of code to the very end of the function. The first line increments the score variable. The second line sets scoreDisplay to the value of the score variable. 

Save and refresh your browser. Hitting the alien should now earn you points! What’s more, when you die and the game resets, score should reset to 0. Great job!

## Write the resetGame() function

Our setup() function is rather bloated at this point. 

Also, we have gameOver() calling setup(), but there is really no need to access HTML elements (with the select() function) each time the player loses. In fact, this can actually slow down the performance of our game over time. 

Instead, we’d rather only call setup() once and create a separate function, resetGame(), that does all the rest of the variable initialization work. 

Scroll to the resetGame() comment and read it. 

<table>
  <tr>
    <td> /*
  * resetGame()
  * This function "resets the game" by initializing ship, alien, and game
  * variables.
  */</td>
  </tr>
</table>


1. First, declare the resetGame() function beneath this comment.

1. Within setup(), cut all code beneath **scoreDisplay = select("#score-display")**.

2. Paste this code inside resetGame().

3. At the end of resetGame(), initialize gameRunning to true (this is declared beneath "Game Variables" at the top of the file; you’ll why we need this in a second).  

1. Back in setup(), simply call resetGame() as the last line of that function.

## Modify draw() to check if game is running

Let’s modify the draw() function so that it doesn’t do anything unless the gameRunning() variable is true. This will prevent the game from running in situations where we might have other screens active (e.g., a ship select screen, a game over screen) or the game is paused (see [this challenge](#heading=h.qy10bfa6c9ay)).

1. Wrap all code inside the draw() function in an if-block, such that the code within only runs if the game is running (i.e., gameRunning is true).

## Modify gameOver() to call resetGame() instead of setup()

Second to last step! Here is what we’ll do to gameOver():

* At the start of this function, we should set gameRunning to false. It’s game over! 

* It would also be a good idea to let the player know what their final score is. 

* Finally, we should call resetGame() instead of setup() in order to make our game run smoother over time. 

1. Modify gameOver() such that all three tasks above are met. 

## Modify keyPressed() to check if game is running

Just to be safe, we want to make sure the spacebar only works when the game is running. This means the if-statement will now check for three things:

* If keyCode === 32 AND

* !shipShooting AND

* gameRunning

1. Modify keyPressed() such that the ship’s bullet is only fired if all three conditions above are met. 

You have completed all of the steps to create the base project! Now it’s time to add your own flavor, or try out one of the challenges we have prepared for you.

**Congratulations for completing part 7! Be sure to save your work on your computer and push to GitHub.**

* * *


# Challenges

Make a statement with your project by taking on one of the following challenges!

## Adjusted bullets

Currently, the ship’s bullet begins at its center. Make the bullet begin at the "top" of the ship instead! Do the same for the alien, only make its bullet begin at the bottom instead. 

## Approaching alien

To make things more hectic for the player, make the alien also move down each time it reaches the left or right edge of the canvas.

## Cooler ship, scarier alien

Make your ship and alien look more visually appealing by drawing on top of them. The trick will be making the additional drawings move with the characters themselves! 

## Pause key

Add a pause key to your game! When someone presses "p", for example, the game can pause or unpause. Hint: You’ll need to work with the gameRunning variable. 

It might even be a good idea to make the game begin paused so players aren’t caught off guard by the alien!

## Improved presentation

The web page containing the game is rather bland. Spice it up with HTML and CSS. Add eye-catching background images, slick fonts, and instructions for how to play your game. You might also explain some of the development process behind making the game, which would fit nicely into your portfolio! 

