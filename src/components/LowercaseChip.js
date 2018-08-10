import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class LowercaseChip extends Component {
    checkLowercase() {
        const reg = /.*[a-z]/
        return reg.test(this.props.password)
    }

    render () {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={12}>
              {
                  this.checkLowercase() ? (
                      <Chip color="primary" className="chip" label="Password must contain ONE lowercase character" />
                  ) : (
                      <Chip color="secondary" className="chip" label="Password must contain ONE lowercase character" />
                  )
              }
          </Grid>
        </React.Fragment>
      )
    }
 }

export default LowercaseChip
