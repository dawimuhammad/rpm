import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

import { addAccount, addPassword, clearPassword } from '../actions/accountActions'
import { connect } from 'react-redux'

import LowercaseChip from '../components/LowercaseChip'
import UppercaseChip from '../components/UppercaseChip'
import NumberCharacterChip from '../components/NumberCharacterChip'
import SpecialCharacterChip from '../components/SpecialCharacterChip'
import MinimumCharacterChip from '../components/MinimumLengthChip'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  chip: {
    margin: theme.spacing.unit,
  }
})

class RPMInput extends Component {
    constructor (props) {
      super(props)
      this.state = {
          username: '',
          password: '',
          url: '',
          lowercase_chip: 'secondary',
          uppercase_chip: 'secondary',
          minimum_length_chip: 'secondary',
          special_character_chip: 'secondary',
          number_character_chip: 'secondary'
      }

      this.urlChange = this.urlChange.bind(this)
      this.usernameChange = this.usernameChange.bind(this)
      this.passwordChange = this.passwordChange.bind(this)
      this.submitAccount = this.submitAccount.bind(this)
    }

    urlChange(e) {
        this.setState({
            url : e.target.value
        })
    }

    usernameChange(e) {
        this.setState({
            username : e.target.value
        })
    }

    passwordChange(e) {
        if (e.target.value === undefined) {
          e.target.value = ''
        }

        this.props.addPassword(e.target.value)
    }

    async submitAccount(e) {
        e.preventDefault()

        await this.props.addAccount({
          url: this.state.url,
          username: this.state.username,
          password: this.props.password
        })

        await this.props.addPassword('')

        this.setState({
            url: '',
            username: '',
            password: ''
        })
    }

    render () {
        return (
          <React.Fragment>
              <Paper>
                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className="container-dual-rpm">

                  <Grid container
                        justify="center"
                        alignItems="center" >

                      <Typography>
                          Password Manager
                      </Typography>

                  </Grid>

                  <Grid container
                        justify="center"
                        alignItems="center" >

                    <form id="rpm-input" onSubmit={ this.submitAccount }>

                      <TextField
                        id="account-url"
                        label="Host"
                        placeholder="Type your account host URL .."
                        fullWidth
                        margin="normal"
                        value={ this.state.url }
                        onChange={ this.urlChange }
                      />

                      <TextField
                        id="account-username"
                        label="Username"
                        placeholder="Type your coolest username .."
                        fullWidth
                        autoComplete="username"
                        margin="normal"
                        value={ this.state.username }
                        onChange={ this.usernameChange }
                      />

                      <TextField
                        id="account-password"
                        label="Password"
                        type="password"
                        placeholder="Type your strongest password you can provide .."
                        fullWidth
                        autoComplete="current-password"
                        margin="normal"
                        value={ this.props.password }
                        onChange={ this.passwordChange }
                      />

                    <Grid container
                          justify="center"
                          alignItems="center"
                          className="container-password-chips" >

                          <Grid item sm={8}>
                            <LowercaseChip password={ this.props.password } />
                          </Grid>

                          <Grid item sm={8}>
                            <UppercaseChip password={ this.props.password }/>
                          </Grid>

                          <Grid item sm={8}>
                            <NumberCharacterChip password={ this.props.password } />
                          </Grid>

                          <Grid item sm={8}>
                            <SpecialCharacterChip password={ this.props.password } />
                          </Grid>

                          <Grid item sm={8}>
                            <MinimumCharacterChip password={ this.props.password } />
                          </Grid>
                    </Grid>

                      <Grid container
                            justify="center"
                            alignItems="center"
                            className="container-button-save-account" >

                            <Button id="account-save" type="submit" variant="fab" color="primary" className="rpm-button-account-save">
                                <AddIcon />
                            </Button>

                      </Grid>

                    </form>

                  </Grid>

                </Grid>
              </Paper>
          </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
  return {
    accounts: state.accountsReducer.accounts,
    password: state.accountsReducer.password
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addAccount: (newAccount) => { dispatch(addAccount(newAccount)) },
    addPassword: (password) => { dispatch(addPassword(password)) },
    clearPassword: () => { dispatch(clearPassword()) }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RPMInput))
