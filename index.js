var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


document.querySelector("h1").style.fontSize= "x-large";
  
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

function winner()
{
    if(randomNumber1>randomNumber2) return "🚩Player 1 WINS!!";
    else if(randomNumber1<randomNumber2) return "Player 2 WINS!!🚩";
    else return "DRAW.";
}


document.querySelector("h1").innerHTML = winner();