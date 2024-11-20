/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';
const goodMorning = 'Buon Giorno'

// Dichiara la funzione qui.
const greeting = (hello, myName) => `${hello}, ${myName}!`


// Invoca la funzione qui e stampa il risultato in console
console.log(greeting(goodMorning, name));


//Risultato atteso se si passa 'Mario': // ciao Mario