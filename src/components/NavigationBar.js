import React, { Component } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

class NavigationBar extends Component {
    render () {
        return (
          <AppBar position="static" color="default">
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center" >
              <Toolbar>
                  <Typography>
                      Welcome! Tell me your secret and we do the rest.
                  </Typography>
              </Toolbar>

            </Grid>
          </AppBar>
        )
    }

}

export default NavigationBar
