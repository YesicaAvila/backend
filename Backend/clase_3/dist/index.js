"use strict";
console.log("Hola mundo con TS");
console.log("Hola multiverso");
console.log("Hola mmmm");
let precio;
let cantidad;
precio = 25;
cantidad = 3;
let precioTotal = precio + cantidad;
console.log(precioTotal);
let nombre = "Juan";
let mensaje = `Hola, mi nombre es ${nombre}`;
console.log(mensaje);
let esMayordeEdad;
esMayordeEdad = 25 < 25;
if (esMayordeEdad) {
    console.log("Sos Mayor");
}
else {
    console.log("Sos menor");
}
// No es correcto tipar con any:
let dato;
dato = 25;
dato = "Hola";
dato = true;
// Usar void no retorna nada:
function saludar(nombre) {
    console.log(`Hola, ${nombre}`);
}
;
saludar("Juan");
// En este caso, typescript marcara que tiene que retornar algo
function sumar(a, b) {
    return a + b;
}
;
let resultado;
resultado = sumar(10, 15);
console.log(resultado);
let numeros = [1, 2, 3, 4, 5, 6, 7];
let nombres = ["Ricardo", "Ruben", "Osvaldo"];
;
let persona = {
    nombre: "Ricardo",
    edad: 23,
};
let calculadora = {
    sumar(a, b) {
        return a + b;
    },
    restar(a, b) {
        return a - b;
    },
};
;
class GoldenRetriever {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sonido() {
        console.log("woof!");
    }
    ladrar() {
        console.log("Guau, guau!");
    }
}
let perro = new GoldenRetriever("Julio");
perro.sonido();
perro.ladrar();
;
let productos;
productos = [
    {
        nombre: "nombre",
        img: "url de  img",
        id: 24,
        desc: "descripcion del producto"
    },
    {
        nombre: "nombre",
        img: "url de  img",
        id: 24,
        desc: "descripcion del producto"
    },
    {
        nombre: "nombre",
        img: "url de  img",
        id: 24,
        desc: "descripcion del producto"
    },
];
let ejemplo = "Hola mundo";
let longitud = ejemplo.length;
let valor = "100";
let numero = valor;
// En este ejemplo se le puede agrega un dato number o string:
let id;
// function imprimirData(data: number | string) {
//     console.log(data);
// }
// imprimirData("hola")
function imprimirData(data) {
    if (typeof data === "number") {
        console.log("Es un numero");
    }
    else if (typeof data === "string") {
        console.log("Es un string");
    }
    else {
        console.log("Tipo de dato no valido");
    }
}
;
imprimirData(5);
imprimirData("Hola");
//# sourceMappingURL=index.js.map