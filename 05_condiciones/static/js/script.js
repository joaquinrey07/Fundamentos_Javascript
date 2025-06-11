// Ejercicios Condiciones  IF - ELSE
console.log("Conexion con js establecida...")

/* Edad para votar
Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar
(18 años o mas) o n.
*/
function edadVotar() {
    let edad = parseInt(prompt("Ingrese su Edad: "));
    // Input conversion string a numero
    //Condicion IF - else if - else
    if (edad >= 18) {
        alert("Su edad " + edad + "aprobada para votar. ")
    } else if (edad >= 0 && edad < 18) {
        alert("Su edad " + edad + " no esta aprobada para votar. ")
    } else {
        alert("Ingrese un valor valido");
    }
};

function passwordCorrecta() {
    let clave = "1234";
    let pass = prompt("Ingrese su contraseña: ");
    // Condicion estrucutura if- else
    if (pass == clave) {
        alert("Acceso Permitido...");
    } else {
        alert("Acceso Denegado")
    }
};

function numeroPar() {
    let numero = prompt("Ingrese un numero par");
    if (numero % 2 == 0) {
        alert("Es par");
    } else {
        alert("es impar");
    }
}

/*  Solicita la temperatura actual.
 Si es mayor o igual a 30, muestra “Hace calor”, de lo contrario
 muestra “Clima agradable”. */

function temperaturaActual() {
    let temperatura = parseInt(prompt("Ingrese la temperatura: "));

    if (temperatura >= 30 && temperatura < 50) {
        alert("Hace calor")
    } else if (temperatura >= -5 && temperatura <= 15) {
        alert("Agradable")
    } else {
        alert("Ingrese un valor valido");
    }
}


/*  Solicita dos números al usuario.
 Compara ambos y muestra cuál es mayor o si son iguales. */

function compararNum() {
let num1 = parseInt(prompt("Ingresar primer numero"));
let num2 = parseInt(prompt("Ingresar segundo numero"));
if(num1 < num2){
    alert("El numero " + "es menor que " + num2);
} else if(num1 == num2){
    alert("el numero " + num1 + "es igual que " + num2);
} else{
    alert("el numero " + num1 + "es mayor que" + num2);
}
}

function mostrarNotas(){
let nota = parseInt(prompt("Ingresa tu nota: "));

if(ingresa < 4){
    alert("desaprobado");
} else if (ingresa >= 4 && ingresa <=7){
    alert("aprobado");
} else {
    alert("por favor, ingresar valor valido");
}
}

function usuarioAdmin(){
    let user = "admin";
    let admin = prompt("Ingrese un usuario: ");
    if(user == admin){
        alert("Bienvenido administrador")
    } else{
        alert("acceso denegado")
    }
}