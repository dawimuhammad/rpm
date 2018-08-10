import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class MinimumLengthChip extends Component {
    checkMinimumLength() {
        const reg = /.{5,}/
        return reg.test(this.props.password)
    }

    render () {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={12}>
              {
                  this.checkMinimumLength() ? (
                      <Chip color="primary" className="chip" label="Password must contain minimum 5 characters" />
                  ) : (
                      <Chip color="secondary" className="chip" label="Password must contain minimum 5 characters" />
                  )
              }
          </Grid>
        </React.Fragment>
      )
    }
 }

export default MinimumLengthChip
