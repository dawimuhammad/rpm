import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class NumberCharacterChip extends Component {
    checkNumberCharacter() {
        const reg = /.*[0-9]/
        return reg.test(this.props.password)
    }

    render () {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={12}>
            <Chip color={ (this.checkNumberCharacter()) ? ('primary') : ('secondary') } className="chip" label="Password must contain ONE numeric characters" />
          </Grid>
        </React.Fragment>
      )
    }
 }

export default NumberCharacterChip
