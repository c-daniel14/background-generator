var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randBtn = document.querySelector("#random-color")

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}


// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient);
function generateRandomHexNumber() {
    // convert decimal to hex
    // number.toString(16)
    var randNumber = Math.floor((Math.random() * 256));
    return randNumber.toString(16);
}
	// generates a random color using hex numbers
function generateRandomColor() {
    var newColor = "#";
    for (var i = 0; i < 3; i++) {
        var hexColor = generateRandomHexNumber();
        newColor += hexColor.length < 2 ? hexColor = "0" + hexColor : hexColor;
    }
    return newColor;
}

// generates new colors for the backgrounds
function randomizeColors() {
    //var newColor1 = generateRandomColor();
    //var newColor2 = generateRandomColor();
    color1.value = generateRandomColor();
    color2.value = generateRandomColor();
    setGradient();
}

// loads the initial values
setGradient();

// adds event listeners
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randBtn.addEventListener("click", randomizeColors);