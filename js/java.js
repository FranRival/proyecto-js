
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