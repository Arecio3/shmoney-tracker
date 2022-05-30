// Specify how app state changes in response to certain actions to Context
// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                // Send back current state
                ...state, // checks for transaction with id to delete
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                // [new transaction, old transaction]
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}