import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const styles = theme => ({
  table: {
    minWidth: 700,
  }
})

class PasswordManager extends Component {
    render () {
        return (
          <div className="password-manager">
            <AppBar position="static" color="default">
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center" >
                <Toolbar>
                    <Typography>
                        Welcome, user!
                    </Typography>
                </Toolbar>
                <Toolbar>
                    <Button>
                      Logout
                    </Button>
                </Toolbar>
              </Grid>
            </AppBar>

            <Grid container>

                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className="container-dual-rpm">

                    <Grid item xs={12} sm={6} >
                      <Paper>
                        <Typography>
                          Haha 1
                        </Typography>
                      </Paper>
                  </Grid>

                </Grid>

                <Grid container
                      direction="row"
                      justify="center"
                      alignItems="center"
                      className="container-dual-rpm">

                    <Grid item xs={12} sm={6} >
                      <Paper>
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
                                <TableRow>
                                  <TableCell component="th" scope="row"> test</TableCell>
                                  <TableCell numeric>test</TableCell>
                                  <TableCell numeric>test</TableCell>
                                  <TableCell numeric>test</TableCell>
                                  <TableCell numeric>test</TableCell>
                                </TableRow>
                          </TableBody>
                        </Table>
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
