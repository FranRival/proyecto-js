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
    let palabrasCodificadas = ["Fnnbovfm", "fsft", "Hsboef"];
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


const variable1 = 65
const variable2 = 81
const variable3 = 69

const palabraMagicaALV = String.fromCharCode(variable1,variable2,variable3)
console.log(palabraMagicaALV)

//ya entendi este codigo a la dickenson. 