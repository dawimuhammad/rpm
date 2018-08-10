import React, { Component } from 'react'

import { connect } from 'react-redux'

import Table from '@material-ui/core/Table'
import Button from '@material-ui/core/Button'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import { fetchAccounts, deleteAccount } from '../actions/accountActions'

import swal from 'sweetalert2'

class AccountTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uuid: ''
        }
    }

    triggerDeleteAccount (id) {
        this.props.deleteAccount(id)

        this.props.fetchAccounts()
    }

    triggerUpdateAccount (id) {
        // swal update form
        swal('halo', `Sukses Update ${id} `, 'success')

        // updateAccount ()
        // this.updateAccount()
    }

    componentDidMount() {
        this.props.fetchAccounts()
    }

    render () {
        const accounts = this.props.accounts

        let isAccountsEmpty = accounts.length === 0
        // console.log(this.props.accounts)
        return (
            <Table className="rpm-table">

              <TableHead>
                <TableRow>
                  <TableCell numeric>No</TableCell>
                  <TableCell>Provider</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Password</TableCell>
                  <TableCell numeric>Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

              {
                  isAccountsEmpty ? (
                    <TableRow>
                      <TableCell component="th" scope="row"> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>

                  ) : (
                    accounts.map( (account, i) => {
                      return (
                        <TableRow key={ i }>
                          <TableCell component="th" scope="row"> { i+1 } </TableCell>
                          <TableCell> { account.url }</TableCell>
                          <TableCell> { account.username }</TableCell>
                          <TableCell> { account.password }</TableCell>
                        <TableCell>
                      <Button color="primary" onClick={ () => this.triggerUpdateAccount(account.uuid) }>
                          Update
                      </Button>
                      <Button color="secondary" onClick={ () => this.triggerDeleteAccount(account.uuid) }>
                          Delete
                      </Button>
                    </TableCell>
                        </TableRow>
                      );
                    })
                  )

              }

              </TableBody>

            </Table>
        )
    }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountsReducer.accounts
  }
}

const mapDispatchToProps = dispatch => {
  return {
  fetchAccounts  : () => { dispatch(fetchAccounts()) },
  deleteAccount  : (id) => { dispatch(deleteAccount(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountTable)
