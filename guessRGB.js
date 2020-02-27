var numSquares = 9;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("#colorDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    //mode buttons event listeners
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                numSquares = 3;
            } else if(this.textContent === "Medium"){
                numSquares = 6;
            } else {
                numSquares = 9;
            }
            reset();
        });
    }
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab colour of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare clicked colour to pickedColor
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Matched!";
                resetButton.textContent = "Play again?"
                changeColors(clickedColor);
                h1.style.color = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    //generate all new colours
    colors = generateRandomColors(numSquares);
    //pic a new random colour from array
    pickedColor = pickColor();
    //change colorDisplay to match picked colour
    colorDisplay.textContent = pickedColor;
    //change colours of squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.color = "white";
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function() {
    reset();
});

function changeColors(color) {
    //loop through all the squares
    for(var i = 0; i < squares.length; i++) {
        //change each colour to match given colour
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colours to array
    for(var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}