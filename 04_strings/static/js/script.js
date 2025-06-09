// Uso de string Ejemplo

 // Variable tipo texto
// Uso; de lenght --> Largo de una variable

function usarString() {
    let nombre = prompt("Ingrese su nombre: ");
    let primeraLetra = nombre[0];
    // Asignamos valor a primera letra con posicion 0 de nombre
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraLetra +
        "\nUltima letra es: " + ultimaLetra
    ); // Mostrar el resultado
}

// Tarea: Imprimir segunda letra
// y penultima del apellido

function manipularApellido() {
    let apellido = prompt("Ingrese su apellido: ");
    let segundaLetraApellido = apellido[1];
    let penultimaLetraApellido = apellido[apellido.length - 2];
    alert("Segunda letra del apellido es: " + segundaLetraApellido +
        "\nUltima letra del apellido: " + penultimaLetraApellido
    ); // Mostrar el resultado
}


