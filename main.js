let nume1 = parseInt(prompt("Ingrese primera nota"));
let nume2 = parseInt(prompt("Ingrese segunda nota"));
let nume3 = parseInt(prompt("Ingrese tercera nota"));
let nume4 = parseInt(prompt("Ingrese cuarta nota"));
let faltas = parseInt(prompt("Cantidad de Faltas"))
let nf = 0;

let calculo = ((nume1+nume2+nume3+nume4)/4); 
if (faltas >= 6) {
    calculo = ((nume1+nume2+nume3+nf)/4);
}

function sumarNumeros() {
    document.write("Nota Final:" +" " +calculo);
}
sumarNumeros();
