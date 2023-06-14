/* 
    Creazione di un ciclo con una ripetizione di numeri da 1 a 100:

    Condizioni: 
        - Se è multiplo di 3 => scrivo Fizz
        - Se è multiplo di 5 => scrivo Buzz
        - Se è multiplo di entrambi => scrivo FizzBuzz
        - Altrimenti scrivo il numero
        Stampa in console
        Stampa in pagina 
*/

// Mostro gli elementi nella console:
    
/* for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
     } else if (i % 3 === 0) {
         console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log ("Buzz");
    } else {
        console.log(i);
    }
}*/

// Bonus:

// Selezioniamo il container nel DOM
const container = document.querySelector('#container');

// Ciclo attraverso i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  // Creo un nuovo elemento HTML
  const newElement = document.createElement('div');
  const newSpan = document.createElement('span');

  // Aggiungo le classi al nuovo elemento in base al valore del numero
  if (i % 3 === 0 && i % 5 === 0) {
    newElement.classList.add('fizzbuzz');
    newSpan.textContent = 'fizzbuzz';
  } else if (i % 3 === 0) {
    newElement.classList.add('fizz');
    newSpan.textContent = 'fizz';
  } else if (i % 5 === 0) {
    newElement.classList.add('buzz');
    newSpan.textContent = 'buzz';
  } else {
    newElement.classList.add('number');
    newSpan.textContent = i;
  }

  newElement.classList.add('right_angle');
  newElement.appendChild(newSpan);

  // Aggiungo il nuovo elemento al container utilizzando la funzione append()
  container.append(newElement);

}