var rendom1= Math.floor(Math.random()*6)+1;
var rdiceimg="dice"+rendom1+".png";
var rimgsrc="images/"+rdiceimg;
document.querySelectorAll("img")[0].setAttribute("src",rimgsrc);
var rendom2=Math.floor(Math.random()*6)+1;
var rdiceimg2="dice"+rendom2+".png";
var rimgsrc2="images/"+rdiceimg2;
document.querySelectorAll("img")[1].setAttribute("src",rimgsrc2);
if(rendom1>rendom2)
{
    document.querySelector("h1").innerHTML="player1 wins"
}
else if(rendom2>rendom1)
{
    document.querySelector("h1").innerHTML="player2 wins";

}
else{
    document.querySelector("h1").innerHTML="tie happened try again";
}
