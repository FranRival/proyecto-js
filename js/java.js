console.log("hello world")


//tipos de datos primitivos:
//null, undefined, symbol, bigint

//null

const snoopy = null
console.log(snoopy)
console.log(typeof snoopy) //tipo de objeto, siempre nulo. 

//undefined 
let name
console.log(name) //indefinido 



//symbol: valores unicos que no cambian
const uniqueId = Symbol('id')
const symbol1 = Symbol(1)
const symbol2 = Symbol(1)
console.log(symbol1===symbol2) //viendo si son true. aqui detecta que son diferentes aunque tengan el mismo valor. 



const ID = Symbol('id')
let user = {} //creamos un objeto vacio
user[ID] = '1234' //pero le aqgregamos una key y 
console.log(user) //extrano codigo alv

//es util para evitar dolisiones con datos unicos. 


//bigINt: numero muy grandes o exresiones dificiles de manejar 

const bigNumber = 234454548357948n
console.log(bigNumber)

const numberOfParticlesInTHeUniverse = 1000000000000000000000000000000000000000n

console.log(numberOfParticlesInTHeUniverse);