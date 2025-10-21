//console.log("¡Hola, JavaScript!");
//var edad = 25
//console.log(edad)
//
//var suma = 10 + 5;
//console.log(suma)
//
//var a = "5";
//var b = 3;
//var resultado = a + b;
////console.log(resultado);
//
//var numero = 10;
//console.log(numero > 5);     
//console.log(numero < 5);     
//// true (10 es mayor que 5)
// // false (10 no es menor que 5)
// console.log(numero == 10);   // true (10 es igual a 10)
//console.log(numero != 8);    
//// true (10 es diferente de 8)
//var edad = 20;
//console.log(edad >= 18);
//
//var clima = "lluvioso";
//if (clima == "soleado") {
//console.log("¡Es un día perfecto para un picnic!");
//} else if (clima == "lluvioso") {
//console.log("¡Hora de saltar en charcos!");
//} else if (clima == "nublado") {
//console.log("Lleva un paraguas por si acaso");
//} else {
//console.log("¡Vamos a tirarnos en trineo en la nieve!");
//}

//for (var i = 1; i<= 5; i++) {
//    console,log("Mensaje " + i)
//}

function saludar(nombre) {
console.log("¡Hola, " + nombre + "!");
}
//saludar("Ana");    
//saludar("Carlos"); // ¡Hola, Carlos!
//saludar("María");

function sumar(a, b) {
    var resultado = a + b;
    console.log("El resultado es: " + resultado);
}
function resta(a, b) {
    var resultado = a - b;
    console.log("El resultado es: " + resultado);
}
function multiplicar(num1, num2) {
    var resultado = num1 * num2;
    console.log(num1 + " × " + num2 + " = " + resultado);
}
function dividir(num1, num2) {
    var resultado = num1 / num2;
    console.log(num1 + " / " + num2 + " = " + resultado);
}

//dividir (6, 2);

 // Función que compara dos números y devuelve el mayor
function encontrarMaximo(a, b) {
    if (a > b) {
        return a;  // Si a es mayor, devolvemos a
    } else {
        return b;  // Si no, devolvemos b
    }
}
var numero1 = 10;
var numero2 = 7;
// La función devuelve el número mayor
var maximo = encontrarMaximo(numero1, numero2);
console.log("El máximo entre", numero1, "y", numero2, "es:", maximo);
 // El máximo entre 10 y 7 es: 10

var x = 0;
for(var i = 1; i <= 5; i++) { 
    x += i * 2; 
}