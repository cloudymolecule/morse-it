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
        console.log('submit')
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='morse-form'>
                <label>Type Something</label>
                <input onChange={this.handleChange}/>
                <button type='submit'>Morse It!</button>
            </form>
        )
    }
}

export default Morse