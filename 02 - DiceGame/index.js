let randomNumber1 = Math.floor(Math.random() * 6) + 1; //to get a randomNumber between 1 and 6
let randomDiceImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomDiceImage;
let image1 = document.querySelectorAll("img")[0]; // select all because we have to img tags, you select the img then add the index point 0,1,2... 
image1.setAttribute("src", randomImageSource); //First input has to be attributes's name you want to change (src). //and the second parameter should be what we wnat we want to change it to (randomImageSource).
                                                  
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
  
if(randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player 1 Wins!";
	
}
else if (randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML ="Player 2 Wins!";
}
else {
	document.querySelector("h1").innerHTML = "Draw!";

}