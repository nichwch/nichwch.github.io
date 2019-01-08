var bioCard = document.getElementById("bioCard");
var codeCard = document.getElementById("codeCard");
var gameCard = document.getElementById("gameCard");
var bioVideo= document.getElementById("bioVideo");
var codeVideo = document.getElementById("codeVideo");
var gameVideo = document.getElementById("gameVideo");
var largeEnough = true;

window.addEventListener('resize', function(){
    if(window.innerWidth < 600){
      largeEnough = false;
    }
});

bioCard.addEventListener("mouseenter",(event)=>{
  if(largeEnough)
  {
      bioVideo.pause();
  }

});
bioCard.addEventListener("mouseleave",(event)=>{
  if(largeEnough)
  {
      bioVideo.play();
  }

});

codeCard.addEventListener("mouseenter",(event)=>{
  if(largeEnough)
  {
      codeVideo.pause();
  }
});
codeCard.addEventListener("mouseleave",(event)=>{
  if(largeEnough)
  {
      codeVideo.play();
  }

});

gameCard.addEventListener("mouseenter",(event)=>{
  if(largeEnough)
  {
      gameVideo.pause();
  }
});
gameCard.addEventListener("mouseleave",(event)=>{
  if(largeEnough)
  {
      gameVideo.play();
  }
});
