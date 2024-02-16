console.log("hello world")


//social media profile

//1. usar informacion
const username = 'codingAdventure'
const fullName = 'Jon Doe'
const age = 25
const isStudent = true

//2. adress
const adress = {
    street: '123 main street',
    city: 'tecville',
    state: 'Codignlane',
    codezip: 54321
}

const hobbies = ['COding', 'Reading', 'Gaming']

//texto personaliado. Generatoing, personalized bio
const personalizedBio = `Hola, soy ${fullName}. 
Tengo ${age} years old. 
y vivo en ${adress.city},
I love ${hobbies.join(', ')}.
Followme for more codding adventures. 
` 

//Print the use profile and bio
console.log(personalizedBio)