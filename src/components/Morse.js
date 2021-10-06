import '../styles/Morse.css'
import React, { Component } from 'react'
import { FaMortarPestle } from 'react-icons/fa'

class Morse extends Component {
    
    state = {
        input: ''
    }
    
    handleChange = e => {
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='morse-form'>
                <h2>Type Something</h2>

            </form>
        )
    }
}

export default Morse