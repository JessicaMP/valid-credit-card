// Creamos la funcion isValidCard para que verifique si la tarjeta es valida o invalida
function isValidCard() {
  // Creamos la variable cardNumber que almacene los datos que pediremos que ingresen por medio del prompt
  var cardNumber = prompt('Ingrese el número de su tarjeta:');
  // La condicional while nos ayuda a saber que cuando ingresen datos con espacios les vuelva a salir un mensaje en el que ingresen el numero de la tarjeta pero sin espacios
  while (cardNumber === ' ') {
    carNumber = prompt('Ingrese el número de su tarjeta sin espacios:');
  }
  // Creamos una variable array para que almacene los datos ingresados que modificaremos por el metodo split para que se ingrese en un array pero con los elementos declarados como string
  var array = cardNumber.split('', cardNumber.length);
  // Declaramos una variable vacia
  var arr = [];
  // Recorremos cada dato del array
  for (var i = 0; i < array.length; i++) {
    // Creamos una variable cardNumberReverse que sea igual a lo declarado como string que lo parseamos para que sean numeros enteros para luego invertir los elementos del array
    var cardNumberReverse = arr.reverse(arr.push(parseInt(array[i])));
  }
  // Recorremos los elementos de este nuevo array de numeros
  for (var j = 0; j < cardNumberReverse.length; j++) {
    // Condicionamos por medio de un if si la variable j tiene un residuo de 2 ques es igual a 1
    if (j % 2 === 1) {
      // Declaramos una variable que los elementos del indice j q tienen un residuo de 2 igual a 1 se multiplique x 2
      var duplicate = cardNumberReverse[j] * 2;
      // Agregamos a la variable cardNumberReverse los elementos modificados en la variable duplicate que se le divide entre 10 y se le suma la misma variable duplicate pero con residuo de 10
      cardNumberReverse[j] += parseInt(duplicate / 10) + duplicate % 10;
    }
  }
  // Creamos una variable de suma
  var sum = 0;
  // Recorremos todos los elementos de la variable de la variable sum
  for (var k = 0; k < cardNumberReverse.length; k++) {
    // le agregamos la suma que se realizo
    sum += cardNumberReverse[k];
    // Si la suma tiene un residuo de 10 igual a 0 entonces la tarjeta es valida
    if (sum % 10 === 0) {
      alert('tarjeta valida');
      // Si no es asi la tarjeta es invalida
    } else {
      alert('tarjeta invalida');
    }
  }
}
isValidCard();
