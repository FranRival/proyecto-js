
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
