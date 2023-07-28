const sumar = (a: number, b: number): number => {
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
function obtenerPrimerElemento<T>(array : T[]): T {
    return array[0]
}

const obtenerPrimerElemento2 = <T>(array : T[]): T => {
    return array[0]
}

const numeros: number[] = [1,2,3,4,5,6,7,8,9]

const nombres: string[] = ["Agus", "Elisa", "Juan"]

obtenerPrimerElemento(numeros)
obtenerPrimerElemento2(nombres)

// Type:
type Coordenadas = {
    x: number;
    y: number
};

type Color = 'rojo' | 'verde' | 'azul';

type Punto = Coordenadas & {
    color: Color
};

const punto: Punto = {
    x: 10,
    y: 20,
    color: 'rojo'
}

// interface:
interface Persona {
    nombre: string;
    edad: number;
    direccion: string;
};

// El partial de Persona pasa todo a opcional
function actualizarPersona(persona: Persona, cambios: Partial<Persona>): Persona {
    return {...persona, ...cambios}
};

const persona: Persona = {
    direccion: "calle falsa 123",
    edad: 20,
    nombre: "Juan"
}

// No se puede agrega informacion nueva con partial:
const cambios: Partial<Persona> = {
    nombre: "Agustin",
}

const personaActualizada = actualizarPersona(persona, cambios);
console.log(personaActualizada);