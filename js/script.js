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
let arrayNumbers = randomNumbers(5, 1, 100);
//console.log(arrayNumbers);

//Timer per i 5 prompt
setTimeout(promptNumbers, 4000);
//console.log(promptNumbers());

//ELABORAZIONE DATI


//OUTPUT DATI
//Ottengo il riferimento all'elemento HTML con id "array"
let arrayElement = document.querySelector('#array');
//Visualizzo l'array nella pagina convertendolo in una stringa
arrayElement.textContent = arrayNumbers.join(', ');



/*--------------------------*/
//FUNCTIONS
//Creo un array con 5 numeri random da 1 a 100
function randomNumbers(length, min, max) {
    let arrayNumbers = [];
    for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayNumbers.push(random);
    }
    return arrayNumbers;
}
//Creo 5 prompt per inserire i numeri
function promptNumbers(){
    let promptArray = [];
    for (let i = 0; i < 2; i++){
        let domanda = parseInt(prompt("Inserisci i numeri uno alla volta"));
        promptArray.push(domanda);
    }
    return promptArray;
}