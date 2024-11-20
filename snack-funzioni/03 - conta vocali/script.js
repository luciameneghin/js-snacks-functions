/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

const vocals = ['a', 'e', 'i', 'o', 'u'];

// Dichiara la funzione qui.

function vocalsNumber(mainWord, aeiou) {
  let counter = 0;

  const arrayWord = mainWord.split('');
  console.log(arrayWord)

  for (let i = 0; i < arrayWord.length; i++) {
    if (aeiou.includes(arrayWord[i])) {
      counter++
    }
  }
  return counter
}


// Invoca la funzione qui e stampa il risultato in console

console.log(vocalsNumber(word, vocals))

//Risultato atteso se si passa 'javascript': 3 (a, a, i)


/*
Logica:
- creo array con vocali 
nella funzione:
- stringa vuota (counter) per il numero di vocali 
- trasformo la stringa in array (.split)
- for i=0; i<word.length; i++
- if le lettere della parola sono vocali -> counter++
- return counter 

- console.log (nome funzione(word, array))
*/