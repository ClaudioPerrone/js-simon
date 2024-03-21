/* 
Simon Says

Descrizione:
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//INPUT DATI
//Mi collego al div
const userText = document.querySelector('#user-text');
//Evoco la funzione per generare un array di 5 numeri casuali compresi tra 1 e 100
const arrayNumbers = generateRandomArray(5, 1, 100);
userText.innerHTML = arrayNumbers;
console.log(arrayNumbers);
console.log(userText);

//ELABORAZIONE DATI
//Dopo 30 sec dall'inizio del codice viene ripulita la pagina
setTimeout(emptyPage, 2000);
//Dopo 31 sec dall'inizio del codice Vengono chiesti i 5 numeri
setTimeout(guessedNumbers(), 2000);
const timer = 5000;
setTimeout(promptNumbers, timer);
//console.log(promptArray);
//OUTPUT DATI


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
//Funzione per svuotsre la schermata
function emptyPage(){
    //Svuoto la schermata
    userText.innerHTML = "";
}
/*---------------------*/
/*---------------------*/
//Funzione per i 5 prompt
function guessedNumbers(){
    //Creo 5 prompt per inserire i numeri
    //Creo l'array
    const promptArray = [];
    for (let i = 0; i < 5; i++){
        let numberPrompt = parseInt(prompt("Inserisci i numeri uno alla volta"));
        console.log(numberPrompt);
    }
    //console.log(promptArray);
}
/*---------------------*/