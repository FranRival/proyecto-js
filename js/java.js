
//arrays bidimensionales - 66

let array1D = [1,2,3] //unidimensional.
let array2D = [[1,2,3], [4,5,6], [7,8,9]] //bidimensionale

let matrix = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
]

matrix[1][2] = 10
console.log(matrix)

let valor = matrix[0][1]
console.log(valor)

//operaciones comunes con arrays bidimensionales.

for (let i = 0; i < matrix.length; i++) {//filas
    for (let j = 0; j < matrix[i].length; j++){//columnas.
        console.log(matrix[i][j])
    }
} 





function encontrarElemento (matrix, elemento){
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === elemento) {
                return true   
            }
        }
    }
    return false
}

 
console.log(encontrarElemento(matrix, 5))


function matrixDuplicada (matrix){
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++) {
        newMatrix[i] = [...matrix[i]]
    }
    return newMatrix
}

console.log(matrixDuplicada (matrix));


