"use strict";
const sumar = (a, b) => {
    return a + b;
};
// console.log(sumar(5,3));
// Si al siguiente objeto le ponemos una arrow function. 
// El this pasara a ser un estado global, un objeto. En caso contrario, tomara en este caso el valor de nombre
// const objeto = {
//     nombre: "juan",
//     saludar () {
//         console.log(`hola! Soy ${this.nombre}`);
//     }
// }
// objeto.saludar()
// Genericos <T>:
function obtenerPrimerElemento(array) {
    return array[0];
}
const obtenerPrimerElemento2 = (array) => {
    return array[0];
};
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nombres = ["Agus", "Elisa", "Juan"];
obtenerPrimerElemento(numeros);
obtenerPrimerElemento2(nombres);
const punto = {
    x: 10,
    y: 20,
    color: 'rojo'
};
;
// El partial de Persona pasa todo a opcional
function actualizarPersona(persona, cambios) {
    return Object.assign(Object.assign({}, persona), cambios);
}
;
const persona = {
    direccion: "calle falsa 123",
    edad: 20,
    nombre: "Juan"
};
// No se puede agrega informacion nueva con partial:
const cambios = {
    nombre: "Agustin",
};
const personaActualizada = actualizarPersona(persona, cambios);
console.log(personaActualizada);
