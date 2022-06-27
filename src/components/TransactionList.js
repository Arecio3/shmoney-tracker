import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';
import generatePDF from './reportGenerator';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(transactions)
  return (
    <div>
         <h3>History</h3>
     <ul className="list">
        {transactions.map(transaction => ( <Transaction transaction={transaction} key={transaction.id}/>))}
      </ul>
      <button className='generateReportBtn' onClick={() => generatePDF(transactions)}>Generate Report</button>
    </div>
  )
}

export default TransactionList