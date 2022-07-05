var rand1=Math.floor(Math.random()*6);
var rand2=Math.floor(Math.random()*6);
var imgs=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
document.querySelector(".img1").setAttribute("src",imgs[rand1]);
document.querySelector(".img2").setAttribute("src",imgs[rand2]);
if(rand1 > rand2){
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(rand1 < rand2){
  document.querySelector("h1").innerHTML="Player 2 wins🚩";
}
else{
  document.querySelector("h1").innerHTML="🚩Draw !🚩";
}
