import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { withStyles } from '@material-ui/core/styles'

import { addAccount } from '../actions/accountActions'
import { connect } from 'react-redux'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

class RPMInput extends Component {
    constructor (props) {
      super(props)
      this.state = {
          username: '',
          password: '',
          url: ''
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
        this.setState({
            password : e.target.value
        })
    }

    submitAccount(e) {
        e.preventDefault()

        this.props.addAccount({
          url: this.state.url,
          username: this.state.username,
          password: this.state.password
        })

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
                          Password Manager Form
                      </Typography>

                  </Grid>

                  <Grid container
                        justify="center"
                        alignItems="center" >

                    <form id="rpm-input" onSubmit={ this.submitAccount }>

                      <TextField
                        id="account-url"
                        label="Provider URL"
                        placeholder="Type your account provider URL .."
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
                        value={ this.state.password }
                        onChange={ this.passwordChange }
                      />

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

const mapDispatchToProps = dispatch => {
  return {
    addAccount: (newAccount) => { dispatch(addAccount(newAccount)) }
  }
}


export default connect(null, mapDispatchToProps)(withStyles(styles)(RPMInput))
