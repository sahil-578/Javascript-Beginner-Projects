var randomNumber1 = Math.floor(Math.random() * 6) + 1;
// document.querySelectorAll("img").attributes;

var randomImage = "dice" + randomNumber1 + ".png";

var randomSource = "images/" + randomImage;

var imgs1 = document.querySelectorAll("img")[0];
imgs1.setAttribute("src", randomSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent= "Player 2 Wins!";
} 
else{
    document.querySelector("h1").textContent="It's a Draw!"
}