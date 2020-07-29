let numSquares = 3;
let colors = [];
let squares = document.querySelectorAll(".square");
let pickedColor;
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("#colorDisplay");
let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    //mode buttons event listeners
    for(let i = 0; i < modeButtons.length; i++){
        //when mode is clicked, remove selected class from all ("clean slate"), add selected class on clicked element
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
    for(let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            //grab colour of clicked square
            let clickedColor = this.style.backgroundColor;
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
    for(let i = 0; i < squares.length; i++) {
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
    for(let i = 0; i < squares.length; i++) {
        //change each colour to match given colour
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = []
    //add num random colours to array
    for(let i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return the array
    return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
