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
        default:
            return state;
    }
}