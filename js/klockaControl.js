
let klockanStartad = false;

let vxlButton = document.getElementById("vxlKnapp");
let klockansTid = document.getElementById("tid");


function changeButtonState() {
    
    let pressedStart = false;  
    
    // Här kollar vi bakgrundsfärgen på knappen
    switch (vxlButton.style.backgroundColor) {
        
        // om färgen är grön så körs detta kodblock
        case "green":
            vxlButton.style.backgroundColor = "red";  // knappens bakgrundsfärg ändras till röd
            vxlButton.innerText = "STOPP";  // knappens text ändras till STOPP
            console.log('Hej någon har tryckt på knappen START ');
            pressedStart = true;  // talar om att någon tryckt på startknappen
            break; // avslutar hela switch kod blocket.
            
            // om färgen är röd så körs detta kodblock
            case "red":
                vxlButton.style.backgroundColor = "green"; // knappens bakgrundsfärg ändras till röd
                vxlButton.innerText = "START";// knappens text ändras till STOPP
                console.log('Hej någon har tryckt på knappen STOPP');
            }
            
            return pressedStart;
        }
        
        
function styraKlockan() {
            
   let pressedStart = changeButtonState(); 
            
   if (pressedStart && !klockanStartad) {    
      startClock();
   }else{
      stopClock();
   }
}
        

