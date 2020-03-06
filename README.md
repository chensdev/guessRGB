# guessRGB
This is a simple RGB colour guessing game written with JS functionality.

I wrote this as a project on a course I'm doing ('Complete Web Development Bootcamp' instructed by Colt Steele on Udemy).

The general idea is to match the RGB code with one of the squares on the grid. There are three difficulties: easy (3 choices to pick from), medium (6 choices to pick from) and hard (9 choices to pick from).

An RGB value is made up of a combination of three primary colours (red, green and blue), with each colour being represented by a value of 0-255. RGB(0, 0, 0) gives you black due to the absence of all colours, and RGB(255, 255, 255) gives you white.

Here is a helpful image for reference:

https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/AdditiveColor.svg/1024px-AdditiveColor.svg.png

So, keeping this in mind, a code like this:

RGB(255, 0, 0)

Gives you *red* because of the max red value, whereas:

RGB(0 , 255, 0)

Gives you *green*, and:

RGB(0, 0, 255)

Gives you *blue*.

Additionally, looking at the reference picture, you'll see that where the colours meet give you other colours:

Where red and green meet, you get yellow (RGB(255, 255, 0)), where red and blue meet, you get magenta (RGB(255, 0, 255)) and where blue and green meet, you get cyan (RGB(0, 255, 255)).

It is using this information that will allow you to best guess the colour represented by the RGB code. It can get a little tricky sometimes, but with a little practice you'll get it!


