/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const firstLetter = 'A';

// Dichiara la funzione qui. 
function wordWithAFirst(letter, wordsList) {
  const newArray = [];

  for (let i = 0; i < wordsList.length; i++) {
    if (wordsList[i].charAt(0) === letter) {
      newArray.push(wordsList[i]);
    }
  }

  return newArray
}

// Invoca la funzione qui e stampa il risultato in console
console.log(wordWithAFirst(firstLetter, names))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]



/*
Logica:
- assegno una costante alla lettera A, const = A
In una funzione
- metto un array vuoto  -> array = []; in cui pushero i nomi con la A
- if nome.charAt(0) = A
- pusho i nomi che iniziano per A nell'array 

*/