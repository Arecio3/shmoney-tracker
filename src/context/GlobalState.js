import React, {createContext, useReducer, useEffect} from "react";
import AppReducer from './AppReducer';
// initial state
const initialState = {
    transactions:
    JSON.parse(localStorage.getItem("transactions")) || []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider (Gives access throughout app)
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem(
          "transactions",
          JSON.stringify(state.transactions)
        );
      });

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (
    <GlobalContext.Provider value={{transactions:state.transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>)
}