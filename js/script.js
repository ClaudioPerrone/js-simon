/* 
Simon Says

Descrizione:
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//INPUT DATI
//Evoco la funzione per generare un array di 5 numeri casuali compresi tra 1 e 100
const arrayNumbers = generateRandomArray(5, 1, 10);
//console.log(arrayNumbers);

//Timer per i 5 prompt di TOT secondi
const timer = 5000;
setTimeout(promptNumbers, timer);
//console.log(promptArray);

//ELABORAZIONE DATI
if (setTimeout === 0){
    if(randomNumbers === promptNumbers){
        console.log("Hai indovinato");
    } else{
        console.log("Non hai indovinato");
    }
}



//OUTPUT DATI
//Ottengo il riferimento all'elemento HTML con id "array"
let arrayElement = document.querySelector('#arrayRandom');
//Visualizzo l'array nella pagina convertendolo in una stringa
arrayElement.textContent = arrayNumbers.join(', ');

/*--------------------------*/
//FUNCTIONS
/*---------------------*/
// Genera un array di arrayLength numeri random
// arrayLength -> numero intero che definisce la lunghezza dell'array tornato
// numMin -> numero intero minimo da generare
// numMax -> numero intero massimo da generare
// return: un array di arrayLength numeri random

//const arrayNumbers = generateRandomArray(nx, ny, nz);

function generateRandomArray(arrayLength, numMin, numMax) {
    // Creiamo un array vuoto
    const randomNumbersArray = [];

    // finche non ci sono arrayLength numeri nell'array:
    while(randomNumbersArray.length < arrayLength) {
        // genero un numero random
        const randNumber = getRndInteger(numMin, numMax);
        // se il numero random non esiste nell'array lo pusho
        if(!randomNumbersArray.includes(randNumber)) {
            randomNumbersArray.push(randNumber);
        }
    }
    
    return randomNumbersArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
/*---------------------*/
/*---------------------*/
//Creo 5 prompt per inserire i numeri
function promptNumbers(){
    let promptArray = [];
    for (let i = 0; i < 5; i++){
        let numberPrompt = parseInt(prompt("Inserisci i numeri uno alla volta"));
        promptArray.push(numberPrompt);
    }
    //console.log(promptArray);
    return promptArray;
}
/*---------------------*/