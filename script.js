var bioCard = document.getElementById("bioCard");
var codeCard = document.getElementById("codeCard");
var gameCard = document.getElementById("gameCard");
var bioVideo= document.getElementById("bioVideo");
var codeVideo = document.getElementById("codeVideo");
var gameVideo = document.getElementById("gameVideo");
console.log(bioCard);

bioCard.addEventListener("mouseenter",(event)=>{
  bioVideo.pause();
});
bioCard.addEventListener("mouseleave",(event)=>{
  bioVideo.play();
});

codeCard.addEventListener("mouseenter",(event)=>{
  codeVideo.pause();
});
codeCard.addEventListener("mouseleave",(event)=>{
  codeVideo.play();
});

gameCard.addEventListener("mouseenter",(event)=>{
  gameVideo.pause();
});
gameCard.addEventListener("mouseleave",(event)=>{
  gameVideo.play();
});
