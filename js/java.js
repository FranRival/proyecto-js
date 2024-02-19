console.log("hello world")

//proyecto, adivina el numero

const numeroSecreto = Math.floor(Math.random() * 10 +1)

const numeroJugador = parseInt (prompt('Adivina, el number secreto entre el 1 al 10'))


console.log(`Este es el numero con el que juega ${numeroJugador}`);


if (numeroJugador===numeroSecreto) {
    console.log('Yo fucking winning 🏎');
    
}else if (numeroJugador <= numeroSecreto){
    console.log("El numero es demasiado bajo");
}else {
    console.log("so much hight");
}