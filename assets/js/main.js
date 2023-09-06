/*

Traccia
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?

*/




const timer = setInterval(timerFunction, 1000);


function timerFunction(timerLimit) {
    timerLimit = Date.parse("2023-09-06 09:30"); //.parse returns date in ms
    let currentTime = Date.now();
    // console.log(timerLimit, "ms dell'ora massima");
    // console.log(currentTime, "ora attuale in ms");
    let millisecondsToGo = timerLimit - currentTime;
    let secondsToGo = ((millisecondsToGo / 1000) % 60); 
    let minutesToGo = Math.floor((millisecondsToGo / 1000 / 60) % 60) ;
    let hoursToGo = Math.floor((millisecondsToGo / 1000 / 60 / 60) % 60) ;
    
    
     console.log(secondsToGo, "secondi");
     console.log(minutesToGo, "minuti");
     console.log(hoursToGo, "ore");
    

    if (secondsToGo < 0) {
        clearInterval(timer)
        
    }
    let timerDomEl = document.getElementById('timer')
    timerDomEl.innerHTML = hoursToGo.toFixed() + " : " + minutesToGo.toFixed() + " : " + secondsToGo.toFixed()
     
}


