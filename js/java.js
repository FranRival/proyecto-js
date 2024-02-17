console.log("hello world")

//funciones vs methodos 

//capacidades que tienen las funciones al igual que otros objetos 

//1. Pasar funciones como argumentos  -> callback 


function a (){}

function b (a){}

b(a)

//retornar funciones 


function a (){ //declaracion de funcion. 
    function b (){}
    return b
}

//asignar funciones a variables

const a = function (){} //es como si esta funcion tuviera esta variable. -> expresion de funcion.

//tener propiedades y metodos 

function d (){}
const obj = {}
d.call(obj) //su contexto de ejecucion. las funciones tienen metodos asociados. 

//anidar funciones -> nester functions 


function a (){ //funciones anidadas 
    function b (){
        function c (){
        }
        c()
    }
    b()
}


//es posible almacenar funciones en objetos? 


const rocket = {
    name: 'Falcon 9',
    launchMessage: function launchMessage (){
        console.log('🌌');
    }
}

rocket.launchMessage()