import React, { Component } from 'react'

import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
})

class RPMInput extends Component {
    constructor (props) {
      super(props)
      this.state = {

      }
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

                      <TextField
                        id="account-search"
                        label="Search Account"
                        placeholder="Type your account .."
                        fullWidth
                        margin="normal"
                      />

                    <Grid item>
                        <Button color="primary">
                            Search
                        </Button>
                    </Grid>

                  </Grid>

                </Grid>
              </Paper>


          </React.Fragment>
        )
    }
}

export default withStyles(styles)(RPMInput)
