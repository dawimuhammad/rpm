import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class UppercaseChip extends Component {
    checkUppercase() {
        const reg = /.*[A-Z]/
        return reg.test(this.props.password)
    }

    render () {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={12}>
            <Chip color={ (this.checkUppercase()) ? ('primary') : ('secondary') } className="chip" label="Password must contain ONE uppercase character" />
          </Grid>
        </React.Fragment>
      )
    }
 }

export default UppercaseChip
