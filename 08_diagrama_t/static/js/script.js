function mostrarTablaMultiplicar() {
    let numero = parseInt(prompt("Ingrese número para trabajar: "));
    let tablas = `Tabla de ${numero}: `;
    for (let i = 1; i <= 10; i++) {
        tablas += `\n ${numero} x ${i} = ${numero * i}`;
    }
    alert(tablas)
    console.log(tablas)
}
