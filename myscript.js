/* Descrizione:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

   - il prezzo del biglietto è definito in base ai km (0.21 € al km)
   - va applicato uno sconto del 20% per i minorenni
   - va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va emesso (presentato all'utente) in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
 */


/* Chiedo all'utente il numero di chilometri che vuole percorrere e l'età del passeggero o della passeggera.*/
const firstQuestion = parseInt(prompt('Quanti km vuoi percorrere?'));
console.log(firstQuestion);

const secondQuestion = parseInt(prompt('Quanti anni hai?'));
console.log(secondQuestion);

let ticketPrice = firstQuestion * 0.21 ;

/* Calcolo prezzo biglietto per utente maggiorenne, con età inferiore a 65. */
if ((secondQuestion >=18) && (secondQuestion <=64)) {
   document.getElementById('output').innerHTML = ticketPrice + 'euro' ;
}



