        
var klockIntervall // ska vara kopplad till window objektet därför var och inte let
        
let seconds=0;
   
let timeInterval = 1000;  // Normalt 1000;


function startClock(){
            
    klockIntervall = setInterval(function () {

      seconds+=1;
      klockansTid.innerText = getTimeString(seconds); // ropar på funktionen getTimeString() som returnerar tiden.

      }, timeInterval);
            
    klockanStartad = true; // Anger att klockan nu är startad.
}
        
function stopClock(){
            
    clearInterval(klockIntervall);  // stoppar setInterval objektet som heter klockIntervall

    document.getElementById("tid").innerText = "00:00:00"; // tilldelar texten "00:00:00" till hemsidan.

    klockanStartad = false; // Anger att klockan är stoppad.

    seconds = 0;
}
        