import { database } from '../firebase/firebase'
import swal from 'sweetalert2'

export const addAccount = (newAccount) => async dispatch => {
    let ref = database.collection('accounts').doc()

    ref.set({
        uuid: ref.id,
        url: newAccount.url,
        username: newAccount.username,
        password: newAccount.password
    })

    dispatch(fetchAccounts())
}

export const deleteAccount = (id) => async dispatch => {
    console.log('id dapet dari account action', id)

    database.collection('accounts').doc(id).delete()
    .then( (res) => {
        console.log(res)
        dispatch(fetchAccounts())
        swal('halo', `Sukses delete ${id} `, 'success')
    })
    .catch((err) => {
        console.log(err)
    })

}

export const addAccountsToState = accounts => {
  console.log('ini dari actions', accounts)
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
