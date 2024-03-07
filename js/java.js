
//every y some
const edades = [21, 25, 30, 19, 22, 31]

//every

const todosSonAdultos = edades.every( edades => edades > 18) //pide como parametro una funcion

console.log(edades)
console.log(todosSonAdultos) //devuelve un true


//some

const alMenosUnoEnTreinta = edades.some(edades => edades > 30)

console.log(edades)
console.log(alMenosUnoEnTreinta)