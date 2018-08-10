import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import NavigationBar from '../components/NavigationBar'
import RPMInput from '../components/RPMInput'
import AccountTable from '../components/AccountTable'
import SearchAccount from '../components/SearchAccount'

const styles = theme => ({
  table: {
    minWidth: 700,
  }
})

class PasswordManager extends Component {
    render () {
        return (
          <div className="password-manager">

            <NavigationBar />

            <Grid container>

              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="container-dual-rpm">

                <Grid item xs={12} sm={6} >
                        <RPMInput />
                </Grid>

              </Grid>

              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="container-dual-rpm">

                <Grid item xs={12} sm={6} >
                        <SearchAccount />
                </Grid>

              </Grid>

              <Grid container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    className="container-dual-rpm">

                  <Grid item>
                      <Paper>
                          <AccountTable />
                      </Paper>
                  </Grid>

              </Grid>

            </Grid>
          </div>
        )
    }

}

export default withStyles(styles)(PasswordManager)







//
