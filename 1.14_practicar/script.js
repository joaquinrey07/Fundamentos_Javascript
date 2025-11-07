console.log("JS se conecto perfectamente")
function datosPersona() {
    let edad = parseInt(prompt("Ingrese su edad: "))
    let nombre = prompt("Ingrese su nombre: ")
    let apellido = prompt("Ingrese su apellido: ")
    alert(`Bienvenido ${nombre} ${apellido} con la edad de ${edad} años `)
}


function contarPar() {
    let numero = 100;
    let respuesta = 2;
    let largoPar = ""
    for (let i = 2; i <= numero; i++) {
        if (i % 2 != 1) {
            respuesta += i
            largoPar += ` = ${i}`
        }
    }
    alert(`El contador de par hasta el 100 son: ${largoPar}`)
}

function contarImpar() {
    let numero = 100;
    let respuesta = 0;
    let largoImpar = "1"
    for (let i = 2; i <= numero; i++) {
        if (i % 2 != 0) {
            respuesta += i
            largoImpar += ` = ${i}`
        }
    }
    alert(`El contador de par hasta el 100 son: ${largoImpar}`)
}

function sumarPares() {
    let num = parseInt(prompt("Ingrese la cantidad de números pares a sumar: "));

    let suma = 0;
    let contador = 0;
    let numero = 2;


    while (contador < num) {
        suma += numero;
        contador++;
        numero += 2;
    }

    alert(`La suma de los ${num} primeros números pares es: ${suma}`);
}

function sumarNumerosLeidos() {
    let suma = 0;
    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt(`Introduce el número ${i}:`));

        suma += numero;
    }

    alert(`La suma de los 5 números es: ${suma} `);
}

function crecienteDecreciente() {
    let numero1 = parseFloat(prompt("Introduce el primer número:"));
    let numero2 = parseFloat(prompt("Introduce el segundo número:"));

    if (numero1 < numero2) {
        alert("Estado Creciente");
    } else if (numero1 > numero2) {
        alert("Estado Decreciente");
    } else {
        alert("Los números son iguales");
    }

}

function calcularPromedio() {
    let suma = 0;
    for (let i = 0; i < 5; i++) {
        let numero = parseInt(prompt("Introduce el número:"));
        suma += numero;
    }
    let promedio = suma / 5;
    alert("El promedio es " + promedio);
}

function numNaturales() {
    let num = parseInt(prompt("Ingresa un nuemro natural: "));
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += i;
    }
    alert("La suma de los primeros " + "numeros naturales son estos: " + suma)
}

function modificar() {
    let n = parseInt(prompt("Ingresa el valor:"));
    let suma = 0;
    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt("Ingresa un numero:"));
        suma += num;
    }
    alert("la suma es: " + suma)
}

function sumarPrimariosPares() {
    let numero = parseInt(prompt("Ingresa un numero: "));
    let respuesta = 0;
    let largoImpar = ""
    for (let i = 2; i <= numero; i++) {
        if (i % 2 != 1) {
            respuesta += i
            largoImpar += ` + ${i}`
        }
    }
}
