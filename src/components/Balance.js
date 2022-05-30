import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'


const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  // Maps through object and grabs all amounts
  const amounts = transactions.map(transaction => transaction.amount);
  // Use Reduce to add them all together and toFixed to havr 2 decimal places
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}

export default Balance