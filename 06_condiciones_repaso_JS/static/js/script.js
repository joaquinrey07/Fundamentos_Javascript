console.log("Conexion correcta")

/* 1️⃣ Edad y etapa de vida
Pide la edad de una persona.
Si es menor a 13 → “Eres un niño”.


Si tiene entre 13 y 17 → “Eres adolescente”.


Si tiene 18 o más → “Eres adulto”.

📘 Práctica: uso de rangos con if, else if, else.
*/

function verificarEtapa() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    if (edad < 13) {
        alert("Eres un niño!")
    } else if (edad >= 13 && edad < 18) {
        alert("Eres adolecente!")
    } else {
        alert("Eres un adulto")
    }
}


/* Pide una contraseña.
Si el texto ingresado es exactamente "12345", muestra “Acceso permitido”.


Si no, muestra “Acceso denegado”.


📘 Práctica: comparación exacta (===). */


function validarContraseña() {
    let contraseña = "12345";
    let pass = prompt("Ingrese contraseña")
    if (contraseña == pass) {
        alert("Bienvenido!")
    } else {
        alert("Incorrecto, intentar de nuevo")
    }
}

/* 3️⃣ Verificar letra en palabra
Pide una palabra.
Si contiene la letra “e” (mayúscula o minúscula) → “La palabra contiene la letra E”.


Si no → “No contiene la letra E”.


💡 Usa:
if (palabra.toLowerCase().includes('e')) { ... } */

function verificarPalabra() {
    let palabra = prompt("Ingrese su palabra: ");
    if (palabra.toLowerCase().includes('e')) {
        alert("Su palabra contiene e")
    } else {
        alert("Su palabra no contiene e")
    }
}

/* 4️⃣ Comparar dos números
Pide dos números con prompt().
Si el primero es mayor → “El primer número es mayor”.


Si el segundo es mayor → “El segundo número es mayor”.


Si son iguales → “Son iguales”.


📘 Práctica: comparaciones dobles. */

function compararNumeros() {
    let primernumero = parseInt(prompt("Ingresa su primer numero: "));
    let segundonumero = parseInt(prompt("Ingresa su segundo numero: "));
    if (primernumero > segundonumero) {
        alert("Su primer numero es mayor");
    } else if (primernumero < segundonumero) {
        alert("Su segundo numero es mayor");
    } else if (primernumero == segundonumero) {
        alert("Los numeros son iguales");
    }
}

/* 5️⃣ Determinar si el número es par o impar
Pide un número.
Si el resto al dividir por 2 (% 2) es 0 → “Número par”.


Si no → “Número impar”.


📘 Práctica: uso del operador módulo %. */

function verificarPar() {
    let numero = parseInt(prompt("Ingrese su numero: "));
    if (numero % 2 == 0) {
        alert("Su numero es par")
    } else {
        alert("Su numero no es par")
    }
}

/* 6️⃣ Revisar palabra inicial
Pide una palabra.
Si empieza con la letra “A” o “a” → “Empieza con A”.


Si no → “No empieza con A”.


💡 Puedes usar:
if (palabra[0].toLowerCase() === 'a') { ... } */

function palabraInicial() {
    let palabra = prompt("Ingrese su palabra")
    if (palabra[0].toLowerCase() === 'a') {
        alert("Empieza con A")
    } else {
        alert("No empieza con A")
    }
}

/* 7️⃣ Temperatura ambiente
Pide una temperatura.
Si es menor a 10 → “Hace frío”.


Si es entre 10 y 25 → “Clima templado”.


Si es mayor o igual a 26 → “Hace calor”.


📘 Práctica: comparaciones encadenadas. */

function temperaturaAmbiente() {
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));

    if (temperatura < 10) {
        alert("Hace frio")
    } else if (temperatura >= 10 && temperatura <= 25) {
        alert("Clima templado")
    } else if (temperatura >= 26) {
        alert("Hacer calor")
    }
}

/* 8️⃣ Nombre reconocido
Pide un nombre.
Si el nombre es “Dany” → “Hola, profesor 👋”.


Si el nombre es “Ely” → “Hola, mamá 🌷”.


En cualquier otro caso → “Hola, visitante”.


📘 Práctica: varias condiciones exclusivas. */

function nombreCuenta() {
    let nombre = prompt("Ingrese un nombre ")
    let dany = "dany"
    let ely = "ely"
    if (nombre == dany) {
        alert("Hola profesor")
    } else if (nombre == ely) {
        alert("Hola mama")
    } else {
        alert("Hola, visitante")
    }
}


/* 9️⃣ Nota de evaluación
Pide una nota entre 1 y 7.
Si es 4 o más → “Aprobado”.


Si es menor que 4 → “Reprobado”.


Si está fuera del rango 1–7 → “Nota inválida”.


📘 Práctica: validaciones con límites. */

function calificaciones() {
    let nota = parseInt(prompt("Ingrese su nota: "))

    if (nota <= 3.9 && nota >= 1.0) {
        alert("Aprobado!")
    } else if (nota >= 4.0 && nota <= 7.0) {
        alert("Reprobado")
    } else {
        alert("Ingresa una nota valida")
    }
}



function palabraClave() {
    let frase = prompt("Escribe una frase: ");

    if (frase.toLowerCase().includes("jesus")) {
        alert("La frase ${frase} contiene la palabra clave");
    } else {
        alert("La frase ${frase} no contiene la palabra clave.");
    };
}