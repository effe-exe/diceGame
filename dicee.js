var n1 = Math.floor(Math.random() * 6) + 1;
var n2 = Math.floor(Math.random() * 6) + 1;

if(n1>n2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if(n2>n1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw";
}
var imgDice1 = "images/dice" + n1 + ".png";
var imgDice2 = "images/dice" + n2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", imgDice1);
document.querySelectorAll("img")[1].setAttribute("src", imgDice2);
console.log(imgDice1, imgDice2)