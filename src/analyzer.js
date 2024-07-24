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

    let charsExS = 0;
    const symbols = "[ .,?!¡¿;:]"

    for (const letter of text) {
      if (symbols.includes(letter) === false) { charsExS++ }
    }
    return charsExS
  },


  /*Función para obtener Contador de Longitud de palabra */

  getAverageWordLength: (text) => {

    const wordC = text.split(' ');
    let sum = 0;


    for (let avrg = 0; avrg < wordC.length; avrg++) {

      sum += wordC[avrg].length

    }

    const res = sum / wordC.length;
    return parseFloat(res.toFixed(2))

  },


  /*Función para obtener Contador de Números */

  getNumberCount: (text) => {

    const lastChar = text[text.length-1] 
    
    if(lastChar === "."){
      text = text.substring(0,text.length-1)
    }

    const wordsArr = text.split(" ");

    let numbC = 0;

    for (const word of wordsArr) {
      
      const numero = Number(word); 
      if (  !isNaN(numero) ) { 
        numbC++
      }
    }

    return numbC;
  },


  /*Función para obtener Contador de Suma de Números */

  getNumberSum: (text) => {

    const lastChar = text[text.length-1] 
    if(lastChar === "."){
      text = text.substring(0,text.length-1)
    }

    const wordsArr = text.split(" ");

    let sum = 0;

    for (const word of wordsArr) {

      const numero = Number(word); 
      if (  !isNaN(numero) ) { 
        sum = sum + numero 
      }
    }
    return sum;
  }

};
export default analyzer;
