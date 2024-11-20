/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function firstLetter(nomi) {
  const letter = [];
  for (let i = 0; i < nomi.length; i++) {
    let symbol = nomi[i].charAt(0);
    letter.push(symbol)
  }
  return letter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

/*
Logica: 
Nella funzione: 
- variabile vuota
- stampare ogni singolo nome all'interno dell'array in una stringa (creare una nuova costante) 
- usare charAt(0), per stampare solo la prima lettera 
- ricomporre l'array con .split(', ')

-richiama la funzione 
*/