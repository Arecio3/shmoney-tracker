import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    // Controls text for transaction
  const [text, setText] = useState('');
    // Controls Amount   
  const [amount, setAmount] = useState(0);

  const{ addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction)
  }

  return (
    <>
         <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Wtf you do with the money" />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            <span style={{color: 'gray', fontSize: '12px', fontWeight: '700'}}>If its an expense add -</span></label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction