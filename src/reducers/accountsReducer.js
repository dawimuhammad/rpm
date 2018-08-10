const initialState = {
    accounts : [],
    password: ''
}

const accountsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNTS_STATE':
            return { ...state, accounts: action.payload.accounts }
        case 'ADD_PASSWORD':
            return { ...state, password: action.payload.password }
        case 'CLEAR_PASSWORD':
            return { ...state, password: action.payload.password }
        default:
            return state
    }

}

export default accountsReducer
