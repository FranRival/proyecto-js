console.log("hello world")

//type castign y coercion: conversion de tipos
//lenguajes compilados: c, c++, rust, go, swift: este codigo es traducido antes de la ejecucion
//chequeo estatico detipos 

//interpretados: se traducen confirme se traduce el codigo 
//chequeto dinamico de tipos 

//js no se da cuenta, hasta que va revisando el programa

//js tiene un tipado debil: 

//una variable tiene un valor numero, y luego volver a asignarle un valor string. eso lo permite js

const saludo = 'Hola'
console.log(saludo)

const despedida = 'ADios'
console.log(despedida)

const titulo = 'No me gusta la sopa'
console.log(titulo) //aqui ocurre un error? 

const descripcion = 'porque esta caliente'
console.log(descripcion)


const numero = 2
const booleano = true
console.log(numero+booleano) //error: sale 3, los covierte a conveniencia de js 

//CONVERSION
//implicita: 2 + true
//explicita: string(), Numbre(), Boolean()