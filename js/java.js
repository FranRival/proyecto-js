
//proyecto de cartas

const deck = ['♠', '♥', '♣', '♦','♠', '♥', '♣', '♦','♠', '♥', '♣', '♦']

function barajarCartas (){
    for (let i = deck.length -1; i > 0; i--) { 
        const j = Math.floor(Math.random() * i +1); //rango, va a ser de 0 hasta i. 
        [deck[i], deck[j]] = [deck[j], deck[i]]
        //un algoritmo:Fisher-Yates. barajas de cartas. 
    }
}

function dealCards (numCard){
    const dealCards = deck.splice(0,numCard)
    return dealCards
}


barajarCartas()
const player1 = dealCards(3)
const player2 = dealCards(3)
const player3 = dealCards(3)

console.log("Manos del jugador n1", player1)
console.log("Manos del jugador n2", player2)
console.log("Manos del jugador n3", player3)


//el punto y coma puede dar a error. en la linea 8... 