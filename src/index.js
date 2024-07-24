import analyzer from './analyzer.js';

/*Caja de texto  */

const txtArea = document.getElementsByName('user-input')[0];

/*Funciones para cada métrica */

const chars = document.querySelector('[data-testid=character-count]');
const charsExS = document.querySelector('[data-testid=character-no-spaces-count]');
const words = document.querySelector('[data-testid=word-count]');
const numbers = document.querySelector('[data-testid=number-count]');
const numbersSum = document.querySelector('[data-testid=number-sum]');
const average = document.querySelector('[data-testid=word-length-average]');

txtArea.addEventListener('input', (ev) => {
  const textareaEl = ev.target
  const text = textareaEl.value 

  const lettersCount = analyzer.getCharacterCount(text)
  chars.innerHTML ="Carácteres: " +lettersCount 

  const wordsCount = analyzer.getWordCount(text)
  words.innerHTML = "Palabras: " + wordsCount

  const charsExSCount = analyzer.getCharacterCountExcludingSpaces(text)
  charsExS.innerHTML = "Carácteres sin espacios: " + charsExSCount 

  const averageCount = analyzer.getAverageWordLength(text)
  average.innerHTML = "Longitud promedio: " + averageCount.toString()

  const numbersCount = analyzer.getNumberCount(text)
  numbers.innerHTML = "Números: " + numbersCount 

  const numbersSumCount = analyzer.getNumberSum(text)
  numbersSum.innerHTML = "Suma de números: " + numbersSumCount


})

//Botón: Limpiar caja de texto//

const btn = document.getElementById('reset-button')
btn.addEventListener('click', () => {
  txtArea.value = '';
  chars.innerHTML = 'Carácteres';
  charsExS.innerHTML = 'Carácteres sin espacios';
  words.innerHTML = 'Palabras';
  numbers.innerHTML = 'Números';
  numbersSum.innerHTML = 'Suma de números';
  average.innerHTML = 'Longitud promedio';
});
