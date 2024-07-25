const analyzer = {

  /*Función para obtener Contador de Palabras */

  getWordCount: (text) => {
    
    return text.replace(/[\d.,?!¡¿;:]/g, '').trim().split(' ').length
  },


  /*Función para obtener Contador de Charácteres */

  getCharacterCount: (text) => {

    return text.length
  },


  /*Función para obtener Contador de Carácteres Exc. Espacios y Signos */

  getCharacterCountExcludingSpaces: (text) => {

    let charactersExcludingSpaces = 0;
    const symbols = "[ .,?!¡¿;:]"

    for (const letter of text) {
      if (symbols.includes(letter) === false) { charactersExcludingSpaces++ }
    }
    return charactersExcludingSpaces
  },


  /*Función para obtener Contador de Longitud de palabra */

  getAverageWordLength: (text) => {

    const wordCount = text.split(' ');
    let suma = 0;


    for (let average = 0; average < wordCount.length; average++) {

      suma += wordCount[average].length

    }

    const resultado = suma / wordCount.length;
    return parseFloat(resultado.toFixed(2))

  },


  /*Función para obtener Contador de Números */

  getNumberCount: (text) => {

    const lastCharacter = text[text.length-1] 
    
    if(lastCharacter === "."){
      text = text.substring(0,text.length-1)
    }

    const wordsArray = text.split(" ");

    let numberCount = 0;

    for (const word of wordsArray) {
      
      const numero = Number(word); 
      if (  !isNaN(numero) ) { 
        numberCount++
      }
    }

    return numberCount;
  },


  /*Función para obtener Contador de Suma de Números */

  getNumberSum: (text) => {

    const lastCharacter = text[text.length-1] 
    if(lastCharacter === "."){
      text = text.substring(0,text.length-1)
    }

    const wordsArray = text.split(" ");

    let suma = 0;

    for (const word of wordsArray) {

      const numero = Number(word); 
      if (  !isNaN(numero) ) { 
        suma = suma + numero 
      }
    }
    return suma;
  }

};
export default analyzer;
