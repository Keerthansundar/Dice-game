var name1=prompt("enter player1 name: ");
var name2=prompt("enter player2 name: ");
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomNumberSource1="images/dice"+randomNumber1+".png" ;
var randomNumberSource2="images/dice"+randomNumber2+".png"  ;
var image1=document.querySelectorAll("img")[0]
image1.setAttribute("src",randomNumberSource1);
var image2=document.querySelectorAll("img")[1]
image2.setAttribute("src",randomNumberSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 "+ name1 +" Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = name2 +" Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}











