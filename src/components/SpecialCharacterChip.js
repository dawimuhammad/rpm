import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class SpecialCharacterChip extends Component {
    checkSpecialCharacter() {
        // eslint-disable-next-line
        const reg = /.*[!@#\$%\^&\*\[\]\{\}|;:"'`~,.<>?/\-()_+=]/

        return reg.test(this.props.password)
    }

    render () {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={12}>
            <Chip color={ (this.checkSpecialCharacter()) ? ('primary') : ('secondary') } className="chip" label="Password must contain ONE special characters" />
          </Grid>
        </React.Fragment>
      )
    }
 }

export default SpecialCharacterChip
