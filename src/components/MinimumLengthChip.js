import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Chip from '@material-ui/core/Chip'

class MinimumLengthChip extends Component {
    checkMinimumLength() {
      const reg = /.{5,}/

      // console.log('Minimum Length Test --> ', this.props.password, ' status : ', reg.test(this.props.password))

      return reg.test(this.props.password)
    }

    render () {
      return (
        <React.Fragment>
          <Grid item xs={12} sm={12}>
            <Chip color={ (this.checkMinimumLength()) ? ('primary') : ('secondary') } className="chip" label="Password must contain minimum 5 characters"></Chip>
          </Grid>
        </React.Fragment>
    )
  }
}

export default MinimumLengthChip;