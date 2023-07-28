console.log("Hola mundo con TS");
console.log("Hola multiverso");
console.log("Hola mmmm");

let precio: number;
let cantidad: number;

precio = 25;
cantidad = 3;

let precioTotal: number = precio + cantidad;

console.log(precioTotal);

let nombre: string = "Juan";
let mensaje: string = `Hola, mi nombre es ${nombre}`;

console.log(mensaje);

let esMayordeEdad: boolean;

esMayordeEdad = 25 < 25;

if(esMayordeEdad) {
    console.log("Sos Mayor");
} else {
    console.log("Sos menor");
}


// No es correcto tipar con any:

let dato: any;

dato = 25;
dato = "Hola";
dato = true;

// Usar void no retorna nada:

function saludar(nombre: string): void {
    console.log(`Hola, ${nombre}`)
};

saludar("Juan");


// En este caso, typescript marcara que tiene que retornar algo
function sumar(a: number, b: number): number {
    return a + b
};


let resultado: number;

resultado = sumar(10, 15)

console.log(resultado);


let numeros: number[] = [1,2,3,4,5,6,7];
let nombres: string[] = ["Ricardo", "Ruben", "Osvaldo"];

// interface es un molde, sirve para tipar objetos:
interface Persona {
    nombre: string,
    edad: number
};

let persona = {
    nombre: "Ricardo",
    edad: 23,
};

interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}

let calculadora: Calculadora = {
    sumar(a, b) {
        return a + b
    },
    restar(a, b) {
        return a - b
    },
};


interface Animal {
    nombre: string,
    sonido(): void
};

interface Perro extends Animal {
    ladrar(): void;

}

class GoldenRetriever implements Perro {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre
    }

    sonido(): void {
        console.log("woof!");
    }
    
    ladrar(): void {
        console.log("Guau, guau!");
    }
}

let perro: Perro = new GoldenRetriever("Julio");

perro.sonido()
perro.ladrar()

interface Producto {
    nombre: string;
    img: string;
    id: number;
    desc: string
};

let productos: Producto[];

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

let ejemplo: any = "Hola mundo";

let longitud: number = (ejemplo as string).length;

let valor: any = "100";
let numero: number = <number>valor;


// En este ejemplo se le puede agrega un dato number o string:
let id: number | string;

// function imprimirData(data: number | string) {
//     console.log(data);
// }

// imprimirData("hola")


function imprimirData(data: number | string) {
    if (typeof data === "number") {
        console.log("Es un numero");
    } else if (typeof data === "string") {
        console.log("Es un string");
    } else {
        console.log("Tipo de dato no valido");
    }
};

imprimirData(5);
imprimirData("Hola");


