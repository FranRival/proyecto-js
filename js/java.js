
//calificacion promedio aprobatoria

//ejercicio

//promedio para aprobar

const grades = [85, 70, 83, 53, 24, 30, 29, 58, 60]
const passigGrades = grades.filter(grade => grade >= 70)

const averagePassingGrade = passigGrades.reduce((suma, grade) => suma + grade, 0) / passigGrades.length

console.log('Original grades: ', grades)
console.log('Passing grades: ', passigGrades)
console.log('Average passing grades: ', averagePassingGrade)

//otro programa que no understand. 
