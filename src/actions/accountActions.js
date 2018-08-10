import { database } from '../firebase/firebase'
import swal from 'sweetalert2'
import moment from 'moment'

export const addAccount = (newAccount) => async dispatch => {
    let ref = database.collection('accounts').doc()
    console.log('password yang diterima action --> ',newAccount.password)
    ref.set({
        uuid: ref.id,
        url: newAccount.url,
        username: newAccount.username,
        password: newAccount.password,
        createdAt: moment().format('LLL'),
        updatedAt: moment().format('LLL')
    })
    .then( () => {
        swal('You Rock!', 'Added one account to be protected!', 'success')
        dispatch(clearPassword())
        dispatch(fetchAccounts())
    })
    .catch( (err) => {
      swal('Ouch!', 'Failed!', 'error')
      dispatch(clearPassword())
      dispatch(fetchAccounts())
    })
}

export const clearPassword = password => {
    return {
        type: 'CLEAR_PASSWORD',
        payload: {
          password: password
        }
    }
}

export const addPassword = password => {
  return {
    type: 'ADD_PASSWORD',
    payload: {
      password: password
    }
  }
}

export const deleteAccount = (id) => async dispatch => {
    database.collection('accounts').doc(id).delete()
    .then( (res) => {
        console.log(res)
        dispatch(fetchAccounts())
        swal('Ohyeah ..', `Successfully deleted an account!`, 'success')
    })
    .catch((err) => {
        console.log(err)
    })

}

export const addAccountsToState = accounts => {
  return {
    type: 'ADD_ACCOUNTS_STATE',
    payload: {
      accounts: accounts
    }
  }
}

export const fetchAccounts = () => async dispatch => {
    const newAccounts = []

    database.collection('accounts').get()
    .then(function(collections) {
        collections.forEach(collection => {
            newAccounts.push(collection.data())
        })

        dispatch(addAccountsToState(newAccounts))
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error)
    });

}
