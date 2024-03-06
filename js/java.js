
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


//3. filter purchase transaccion

const purchaseTransaction = transaccions.filter(transaccions => transaccions.amount < 0)

console.log(purchaseTransaction)

//aqui se utiliza ya el array. ahi:... filter(transaccions =>.... aqui ya se esta utilizando. 


//4. encuentra una transaccion en especifico por su descripcion


const specificTransaction = transaccions.find(transaccions => transaccions.description === 'Online Purchase')//ese valor de transaccions, debe ser del array. ????????

console.log('La transaccion especifica es:' , specificTransaction)



//5. encontrar el index de una transaccion por cantidad

const indexTransactionWithAmounth = transaccions.findIndex(transaccions => transaccions.amount === -30)

console.log(indexTransactionWithAmounth)

//encuentra la transaccion y el numero de su indice. en este caso, es el puesto 3. 