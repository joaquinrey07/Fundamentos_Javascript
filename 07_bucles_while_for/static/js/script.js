console.log("ALooooooo")

// Creacion funcion bucle while
/* 
Contar numeros del 10 al 1 - Ejemplo
*/

function ejecutarWhile() {
    let count = 10;
    let resultado = "El resultado es: "
    while (count > 0) {
        resultado += ` -${count} `;
        console.log(count);
        count--
    }
    alert(resultado)
}

// Creacion funcion bucle for
function ejecutarFor() {
    let resultado = "El resultado es: "

    for (let i = 10; i > 0; i--) {
        resultado += ` ${i}`;
    }
}

function ejecutarWhile1() {
    let numero = parseInt(prompt("Ingrese su numero: "))
    let count = 1;
    let resultado = "El resultado es: "
    while (count <= numero) {
        resultado += ` ${count} `;
        console.log(count)
        count++
    }
    alert(resultado)
}

function ejecutarWhile2() {
    let numero = parseInt(prompt("Ingrese su numero: "))
    let count = numero;
    let resultado = "El resultado es: "
    while (count > 0) {
        resultado += ` ${count} `;
        console.log(numero)
        count--
    }
    alert(resultado)
}

function ejecutarWhile3() {
    let suma = 0;
    let numero = parseInt(prompt("Ingrese su numero: "))
    let contador = 1;
    let resultado = "Suma: 0";
    while (contador <= numero) {
        suma += contador;
        resultado += ` + ${contador}`;
        contador++
    }
    alert(`${resultado} = ${suma}`)
}

function ejecutarWhile4() {
    let numero = parseInt(prompt("Ingresar numero: "));
    let count = 1;
    let resultado = "el resultado es: "
    while (count <= numero) {
        count++
        if (count % 2 == 0) {
            resultado += ` ${count}`
        }
    }
    alert(` ${resultado}`)
}

function ejecutarFor1() {
    let num = parseInt(prompt("Ingrese un numero: "))
    let tablas = `Tabla de &{num}: `;
    // Inicio de bucle for
    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${num} x ${1} = ${num * i}`
    }
    alert(tablas);
}

function ejecutarFor2() {
    let num = parseInt(prompt("ingresa un numero: "));
    let resultado = `los numeros pares de ${num} son:`;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            resultado += ` ${i}`
        }
    }
    alert(resultado);
}

function ejecutarFor3() {
    let word = prompt("Dime una palabra");
    let cont = 0
    for (let i = 0; i < word.length; i++) {
        cont++
    }
    alert(`La palabra "${word} tiene ${cont} letras."`)
}

function ejecutarFor4() {
    let numero = parseInt(prompt("Ingrese un numero para calcular su factorial"));
    let factorial = 1;
    let largo = "";
    for (let i = 2; i <= numero; i++) {
        largo += ` * ${i}`
        factorial *= i;
    }
    alert(`el factorial de ${numero} es : ${largo} = ${factorial}`)
}

function ejecutarFor5() {
    let numero = parseInt(prompt("Ingresar numero: "));
    let respuesta = 0;
    let largoImpar = "1"
    for(let i = 2; i <= numero; i++) {
        if (1 % 2 != 0){
            respuesta += i
            largoImpar += ` + ${1}`
        }
    }
    respuesta += 1
    alert(`Las suma de ${largoImpar} = ${respuesta}`)
}