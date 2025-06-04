// Declaración de variables
let colorFavorito = ["rojo", "celeste", "azul"];
let elMejorClub = "FC barcelona";
let miEdad = 16;
let valorBooleano = true;  // Valor Verdadero o falso(0 , 1)
let arregloNumeros = [1, 2, 3];
let objetoPersona = { nombre: "Ana", edad: 30 };
let valorIndefinido;
let valorNulo = null;
const mes = "Junio";

// Funciones para mostrar cada valor con alert()
function mostrarColorFavorito() {
  alert("Color favorito: " + colorFavorito);
}

function mostrarElMejorClub() {
  alert("El mejor club: " + elMejorClub);
}

function mostrarMiEdad() {
  alert("Mi edad: " + miEdad);
}

function mostrarBooleano() {
  alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
  alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
  alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
  alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
  alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
  alert("Constante mes: " + mes);
}
