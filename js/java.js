console.log("hello world")

function codifica(palabra) {
    let palabraCodificada = "";
    for (let i = 0; i < palabra.length; i++) {
        palabraCodificada += String.fromCharCode(palabra.charCodeAt(i) + 1);
    }
    return palabraCodificada;
}
function decodifica(palabraCodificada) {
    let palabraDecodificada = "";
    for (let i = 0; i < palabraCodificada.length; i++) {
        palabraDecodificada += String.fromCharCode(palabraCodificada.charCodeAt(i) - 1);
    }
    return palabraDecodificada;
}
function generaResultado() {
    let palabrasCodificadas = ["Ejfhp", "fsft", "hsboef"];
    let resultado = "";
    for (let i = 0; i < palabrasCodificadas.length; i++) {
        let palabraCodificada = palabrasCodificadas[i];
        let palabraDecodificada = decodifica(palabraCodificada);

        resultado += palabraDecodificada;

        if (i < palabrasCodificadas.length - 1) {
            resultado += " ";
        }
    }
    console.log(resultado);
}
generaResultado();