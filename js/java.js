console.log("hello world")


//funciones puras e impuras alv

//puras
//misma entrada, misma salida. no producen efectos secundarios. 

//side effects para que dejen de ser puras 
//1. modificar variables globales: 
//2. modificar parametros 
//3. solicitudes http
//4. todo lo que sea imprimir mensages en pantalla o consola 
//5. manipulacion del dom
//6. obtener la hora actual 


function sum (a,b){
    return a +b
} //funcion pura: recibimos los mismos parametros, y obtenedremos la misma salida 


//funcion ya no es pura, es impura
function sum (a,b){
    console.log('A ', b);
    return a +b
} 

let total = 0 

function sumWithSideEffect (a){
    total += a //+= nos ahorramos escribir otra vez la palabra 
    return total
}//funciones que son impuras 






//funcion pura
function square(x){
    return x * x
}


//funcion pura 
function addTen (y){
    return y + 10
}

const number = 5
const finalResult = addTen(square(number))//coomvinacion de 2 funciones puras

console.log(finalResult) //sale 35

//wai? 
//square: 5 * 5 = 25
//addteen: son 10, porque y mas 10, = 10.

