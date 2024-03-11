
//includes
//indexof
//lastindexof

const stringArray = ['manzanas', 'platanos', 'naranjas', 'uvas', 'platanos', 'kiwi']

const objetivo = 'platanos'

function encuentraIndicesEnElArray (array, objetivo){
    const result = {
        includesTargetString: false,
        fistOcurrenciaIndex: -1,
        lastOcurrenciaIndex: -1,
    }
    array.forEach((element, index)=>{
        if (element.includes(objetivo)) {
            result.includesTargetString = true
            result.fistOcurrenciaIndex = array.indexOf(objetivo)
            result.lastOcurrenciaIndex = array.lastIndexOf(objetivo)
        }
    })
    return result
}

const resultado = encuentraIndicesEnElArray (stringArray, objetivo)

console.log(resultado)