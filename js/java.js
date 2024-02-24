console.log("hello world")

//array:

//metodos que modifican el array

//shift: elimina el primer eleemento del Array, y lo devuelve. 

const colors = ['Yellow', 'Blue', 'Red']
const removeColor = colors.shift()

console.log(colors)
console.log(removeColor)

//unshift: agrega uno mas elementos al array, al principio. y devuelve el tamano del array luego de la modificacion

const newColors = colors.unshift("purple", 'pink')


console.log(colors)
console.log(newColors)


//ejercicio

function managePlaylist(playlist, newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const inicialPlaylist = ['back in black', 'Sweater weater', 'Eventualy']
const newSongtoAdd = 'blank space'

const updatedPlaylist = managePlaylist(inicialPlaylist, newSongtoAdd)
console.log(updatedPlaylist) //asi es como se debe de hacer. esta encapsulado en una constante. 