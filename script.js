console.log("hi")
let start=document.getElementById("start");
console.log(start)
let stop=document.getElementById("stop");
console.log(stop)
let reset=document.getElementById("reset");
let outputSeconds=document.getElementById("seconds");
let outputTens=document.getElementById("tens");
let seconds=0;
let tens=0;

start.addEventListener("click", () => {
   Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
});
function startTimer(){
  tens++;// tens+=tens
   if (tens<9){
       outputTens.innerHTML="0"+tens;
   }
   if (tens>9){
      outputTens.innerHTML=tens;
   }
  if (tens>99){
    seconds++;
    outputSeconds.innerHTML="0" + seconds;
    tens=0;
    outputTens.innerHTML="0"+0;
  }
  if ( seconds>9){
    outputSeconds.innerHTML=seconds;
  }
}
stop.onclick=function(){
  clearInterval(Interval);
}
reset.onclick=function(){
  clearInterval(Interval);
  tens="00"
  seconds="00"
  outputTens.innerHTML=tens
  outputSeconds.innerHTML=seconds
}