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
                  <TableCell numeric className="test">No</TableCell>
                  <TableCell className="test">Provider</TableCell>
                  <TableCell className="test">Username</TableCell>
                  <TableCell className="test">Password</TableCell>
                  <TableCell className="test">Created At</TableCell>
                  <TableCell className="test">Updated At</TableCell>
                  <TableCell className="test">Actions</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>

              {
                  isAccountsEmpty ? (
                    <TableRow>
                      <TableCell scope="row"> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                      <TableCell> </TableCell>
                    </TableRow>

                  ) : (
                    accounts.map( (account, i) => {
                      return (
                        <TableRow key={ i }>
                          <TableCell component="th" scope="row" className="test"> { i+1 } </TableCell>
                          <TableCell className="test"> { account.url }</TableCell>
                          <TableCell className="test"> { account.username }</TableCell>
                          <TableCell className="test"> { account.password }</TableCell>
                          <TableCell className="test"> { account.createdAt }</TableCell>
                          <TableCell className="test"> { account.updatedAt }</TableCell>
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
