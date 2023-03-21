const validator = {
  isValid: function (creditCardNumber) {
    let sumDoubled = 0; // variable para los numeros que se duplican
    let sumNotDoubled = 0; // variable para los numeros que no.

    for (let i = creditCardNumber.length - 1; i >= 0; i--) { //Inicia el loop que va por todos los digitos empezando por el ultimo hacia el primero
      let digit = parseInt(creditCardNumber.charAt(i)); //Aqui se convierten los numeros en digitos individuales y obteniendo el index de cada uno.
      if ((creditCardNumber.length - i) % 2 === 0) { //Determinar si la posicion es par o impar
        if ((digit *= 2) > 9) digit -= 9; // 
        sumDoubled += digit; // Añade el valor de digit a sumDoubled y lleva el registro de todos los numeros que se duplicaron 
      } else {
        sumNotDoubled += digit; // Aqui se lleva el registro de todos los numeros que no se duplicaron usando el "else" para determinarlo.
      }
    }
    const totalSum = sumDoubled + sumNotDoubled; //Calcula la suma total de todos los digitos tanto los par como impar.
    console.log(totalSum); // Mi verificacion del proceso
    return totalSum % 10 === 0; // checa si la suma total es un multiplo de 10 ya que al terminar en 0 es una tarjeta valida y retorna true, si no retorna false.
  },

  maskify: function (creditCardNumber) {
    const x = creditCardNumber.split(""); // Crea un array de los números que se introducen en el input de la TC.
    for (let i = 0; i < x.length - 4; i++) { // Loop para determinar cuantos espacios excepto los ultimos cuatro quieren ser tomados para ser modificados. // El "i++" funciona para ir moviendose atraves de todos los digitos.
      x[i] = "#"; // este statement da el valor del valor tomado de la "x" tomando en consideracion la variable de la "i" para remplazarlos por un "#".
    }
    return x.join(""); //Aqui se pide regresar el valor a la "x" pero con la modificacion "#" uniendolos en un string todos los elementos.
  },
};

export default validator;
