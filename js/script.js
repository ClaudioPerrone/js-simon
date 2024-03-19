/* 
Simon Says

Descrizione:
- Visualizzare in pagina 5 numeri casuali.
- Da lì parte un timer di 30 secondi.
- Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


//INPUT DATI
//Creo un array con 5 numeri random da 1 a 100
const numbers = [];
console.log(numbers);

//ELABORAZIONE DATI
//Creo 5 numeri random da 1 a 100
for (let i = 0; i < 5; i++){
    //Push i numeri random nell'array
    let random = Math.floor(Math.random() * 100) + 1;
    numbers.push(random)
}

//OUTPUT DATI