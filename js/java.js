console.log("hello world")

//loop: 
//do while 
let palabraOculta = "javascript"
let intentos = 3

function verificarSuposicion (supocision, palabraOculta){

    if(supocision.toLowerCase()===palabraOculta)//convierta todo en minusculas.
    {
        return true
    }
    return false
}//con esta funcion verificamos si lo que escribio el usuario es correcto


function jugarAdivinaLaPalabra(){
    alert("Bienvenido a jugar la palabra oculta")
    alert("Tienes 3 intentos para adivinar la palabra")
    alert("--pista--, la palabra oculta es un lenguje deprogramacion")

    while(intentos > 0){
        let supocision = prompt("Adivina la palabra")

        if(verificarSuposicion(supocision, palabraOculta)){
            alert("COrrecto! Has advinado la keyword")
            break
        }else{
            intentos--

            if( intentos > 0){
                alert(`Incorrecto, aun tienes ${intentos} restantes.`)
            }else{
                alert(`Agotaste tus intentos. La palabra oculta era ${palabraOculta}`)
            }
        }

    }
}


jugarAdivinaLaPalabra()
