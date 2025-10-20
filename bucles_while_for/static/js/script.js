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

function ejecutarWhile2() {
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

function ejecutarWhile3() {
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