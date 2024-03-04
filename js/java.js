
//iteraccion de array
//analisis de transaccion 


const transaccions = [
  {id: 1,
  description: 'Grocery',
  amount: -50
  },
  {
    id: 2,
    description: 'Salary Deposit',
    amount: 2000
   },
   {
    id: 3,
    description: 'Utility Bill Payment',
    amount: -100
   },
   {
    id: 4,
    description: 'Online Purchase',
    amount: -30
   }
]

//calcular el total del balance

const totalBalance = transaccions.reduce((acc, transaction) => acc + transaction.amount, 0) //el acc no esta definido. sooooooo, como carajos funciona this mofo?

console.log('El total del saldo: ', totalBalance)


//2. find the largest transacction (income or expense)


const largestTransaction = transaccions.reduce((maxTransaction, transaction)=> {
  return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount) ? transaction : maxTransaction
}, transaccions[0])

console.log('Largest transaction: ', largestTransaction)


//desde math.abs, valor absoluto del monto de la transaccion, 
//esto es mayor, a esto mismo, 
//vas a devolver el valor de la transaccion.
//y si no, devolver el vlor del acumulador. 

//luego de las llaves, colocar el inicial value. este caso, seria el valor del array, en la pocision 0