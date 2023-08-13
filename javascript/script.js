var number1 = (Math.random() * 6) + 1;
number1 = Math.floor(number1);

var number2 = (Math.random() * 6) + 1;
number2 = Math.floor(number2);

document.querySelector(".number1").setAttribute("src","images/dice" + number1 + ".png");
document.querySelector(".number2").setAttribute("src","images/dice" + number2 + ".png");

if(number1 > number2) {
document.querySelector("h1").textContent = "Player 1 wins";
}
else if(number1 < number2) {
    document.querySelector("h1").textContent = "Player 2 wins";
    }

else {
    document.querySelector("h1").textContent = "It's a draw";
}
