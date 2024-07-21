const analyzer = {

  /*Función para obtener Contador de Palabras */

  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.

    /*"hola mundo".split(' ')->["hola","mundo"] cadena de texto(string) -> arreglo | replace/trim -> texto(string) - texto (string) */
    return text.replace(/[\d.,?!¡¿;:]/g, '').trim().split(' ').length
  },


  /*Función para obtener Contador de Charácteres */

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.

    return text.length
  },


  /*Función para obtener Contador de Carácteres Exc. Espacios y Signos */

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.

    /*for,if *//*arreglo con signos de punt *//*uso de semantica, identificadores descriptivos */


    /*for - para recorrer texto / arreglo / conjunto de elementos*/
    
    let charsExS = 0;
    let symbols = "[ .,?!¡¿;:]"

    for (const letter of text) {
      if (symbols.includes(letter) === false) {charsExS++}
    }
    return charsExS
  },
    /*let charsExS = 0;


    for (const letter of text) {
      if (letter !== " " && letter !== ".") {charsExS++}
    }
    return charsExS

    //return text.replace(/[ .,?!¡¿;:]/g, "").length
  }, */


  /*Función para obtener Contador de Longitud de palabra */

    getAverageWordLength: (text) => {
      //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.

      /* transformar text a arreglo,recorrerlo, llegar por cada posicion sumar el largo.lenhgt por cada posicion, el largo total lo divido por el arreglo dividido anteriormente */


      let wordC = text.split(' ');
      let sum = 0;


      for (let avrg = 0; avrg < wordC.length; avrg++) {

        sum += wordC[avrg].length

      }

      return sum / wordC.length
      //Con la suma vas a sacar el promedio de la longitud de las palabra

    },


      /*Función para obtener Contador de Números */

      getNumberCount: (text) => {
        //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.

        let numbC = 0;

        for (const char of text) {

          let num = parseInt(char)
          if (num >= 0 && num <= 1000) {
            numbC++
          }
        }
        return numbC;
      },


        /*Función para obtener Contador de Suma de Números */

        getNumberSum: (text) => {
          //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

          let sum = 0;

          for (const char of text) {

            let numbers = parseInt(char)
            if (numbers >= 0 && numbers <= 1000) {
              sum = numbers + sum;
            }
          }
          return sum;
        },
};
  export default analyzer;