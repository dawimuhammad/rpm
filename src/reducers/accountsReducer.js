const initialState = {
    accounts : []
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNTS_STATE':
            return { ...state, accounts: action.payload.accounts }
        default:
            return state
    }

}

export default accountsReducer
