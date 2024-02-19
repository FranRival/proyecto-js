console.log("hello world")



//expresions vs statemens
//expresiones versus declaraciones
//expresiones: producen un valor y van acompanados de na delcaracion

//crear biografia de personajes con js

//Create powerfullGIrl obj

function powerfullGIrl (name, color, power){
    this.name = name
    this.color =color
    this.power = power
    this.isLeader = false

    this.displayInfo = function (){
        console.log(`Powerfully girl information:
        Name: ${this.name}
        Color: ${this.color}
        Superpower: ${this.power}
        ${this.isLeader ? 'Leader: yes' : 'Leader: No'}

        `);
    }
    this.becomeLeader = function(){
        this.isLeader = true
        console.log(`${this.name} has become the leader of powerfully girls`);
    }
}

const blossom = new powerfullGIrl('Blossom', 'pink', 'Ice bread')
const butterCup = new powerfullGIrl('ButterCup', 'green', 'Super Strong') 
const bubbles = new powerfullGIrl('Bubbles', 'blue', 'Fly')

blossom.displayInfo()
butterCup.displayInfo()
bubbles.displayInfo()


blossom.becomeLeader() //aqui a convertimos en lider

blossom.displayInfo()
butterCup.displayInfo()
bubbles.displayInfo()