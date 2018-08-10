import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Home extends Component {
    render () {
        return (
            <div className="home">
                <Button variant="contained" color="primary">
                    <Link className="buttonstarted" to="/rpm">
                      Get Started
                    </Link>
                </Button>
            </div>
        )
    }
}

export default Home
