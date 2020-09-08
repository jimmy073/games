var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor= pickColor();
var display = document.getElementById("display");
var message = document.getElementById("message");
var h1 = document.getElementById("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");


display.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
//add colors
	squares[i].style.background = colors[i];
	//addig eventListner

	squares[i].addEventListener("click", function(){
		//grab clicked color
		var clickedColor = this.style.background;
		
	//compare clicked color to picked color
		if (clickedColor === pickedColor) {
			message.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.background=clickedColor;
			resetButton.textContent="Play Again?";
			message.style.color="green";

		}
		else{
			this.style.background = "#232323";
			message.textContent = "Try Again!"
			message.style.color="red";
		}

	}); 

} 

function changeColors(color){
	//taking a given color and assign it to all squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var color = Math.floor(Math.random()*colors.length)
	return colors[color]; 
}

function generateRandomColors(num){
//create an array of collrs
 var arr =[];
//add colors randomly
for(var i=0; i<num; i++){
	//call a function that brings random colors and assign value
		arr.push(randomColor());
}
//return the array
return arr;
}

function randomColor(){
	//generate red
		var r =Math.floor(Math.random()* 256);
	//generate red
		var g =Math.floor(Math.random()* 256);
	//generate red
		var b= Math.floor(Math.random()* 256);
//"rgb(rrr,rrr,rrr)"
		return "rgb(" + r + ", " + g + ", " +b +")";

}

resetButton.addEventListener("click", function(){
	//new colors
		colors = generateRandomColors(numSquares);
	//pick new color
		pickedColor= pickColor();
	//change displayed color 
		display.textContent = pickedColor;
	// assign new colors in squares
	for(var i=0; i<squares.length; i++){
		squares[i].style.background=colors[i];
	}
	//reset background for heading 1
	h1.style.background = "steelblue";
	resetButton.textContent="New Colors";
	message.textContent="";
});

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	display.textContent = pickedColor;
	h1.style.background="steelblue";
	resetButton.textContent="New Colors";
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none"
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	resetButton.textContent="New Colors";
	pickedColor = pickColor();
	display.textContent = pickedColor;
	h1.style.background="steelblue";
	for(var i=0; i<squares.length; i++){
		squares[i].style.display="block";
		squares[i].style.background=colors[i];
	}
});