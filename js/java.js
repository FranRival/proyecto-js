
//uniendo metodos. COncat. 
//no modifica el array

const morseCOde1 = ['....', '---'] //H O
const morseCOde2 = ['.-..', '.-'] // L A
const morseCodeMessage = morseCOde1.concat(morseCOde2)



console.log(morseCOde1)
console.log(morseCOde2)
console.log(morseCodeMessage)


//combine with concat .2

const morseCodeMessage1 = [].concat(morseCOde1, morseCOde2)//array vacio

console.log(morseCodeMessage1);


//spread operatior, con 3 puntos

function combineMorseMessages (morseCode1, morseCode2){
 console.log('Esta es la funcion de combinar mensaje',[...morseCode1, ...morseCode2])

}//se combinara el array. 

combineMorseMessages(morseCOde1,morseCOde2)
console.log();


const numbers = [1, 2, 3]
const string = 'String'

combineMorseMessages(numbers,string) //separados. siendo parte del array


//JOIN. junta todos los datos, y devuelve un solo valor. 

const morseCodeMessaString = morseCodeMessage1.join(' # ')

console.log('Utilizando Join: ', morseCodeMessaString);