
function getTimeString(time){

    /*
    Denna funktion är inte fullständig utan bara en början 
    på hur det fungerar.
    Det är bara i denna funktion ni behöver ändra
    för att få det fungera.
    */
 
    let h = 0;
    let m = 0;
    let s = 0;
    
    //let time = 8000;

    // Antal timmar ?   3600
    
    h = Math.floor(time/3600);

    if(h<10) h = "0"+h;

    time = time-h*3600;

    // Antal minuter ? 60

    m = Math.floor(time/60);

    s = time -m*60;

    return `${h}:${m}:${s}`;

}