// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'null';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str = "2") {
  // "Return" la string provista: str
  // Tu código:

  return str
}

function suma(x = 3, y = 5) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:


  return x + y
}

function resta(x = 3, y = 5) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:

  return x - y


}

function multiplica(x = 3, y = 5) {

  return x * y

}

function divide(x = 3, y = 5) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  return x / y

}

function sonIguales(x = 3, y = 5) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:


  return x === y ? true : false

}

function tienenMismaLongitud(str1 = "hola", str2 = "chao") {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:

  return str1.length === str2.length
}

function menosQueNoventa(num = 89) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  return num < 90 ? true : false
}

function mayorQueCincuenta(num = 51) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  return num > 50 ? true : false
}

function obtenerResto(x = 11, y = 5) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % 5
}

function esPar(num = 10) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 === 0 ? true : false
}

function esImpar(num = 9) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  return num % 2 !== 0 ? true : false

}

function elevarAlCuadrado(num = 2) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  return num * num

}

function elevarAlCubo(num = 2) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return num * num * num
}

function elevar(num = 2, exponent = 5) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent)
}

function redondearNumero(num = 1.7) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}

function redondearHaciaArriba(num = 1.7) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)

}

function agregarSimboloExclamacion(str = "Hola") {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!"
}

function combinarNombres(nombre = "Felipe", apellido = "Beleño") {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido

}

function obtenerSaludo(nombre = "Felipe") {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:

  return "Hola" + " " + nombre + "!"

}

function obtenerAreaRectangulo(alto = 2, ancho = 3) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
};
