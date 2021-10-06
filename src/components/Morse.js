import '../styles/Morse.css'
import React, { Component } from 'react'
import { EnglishMorse } from '../constants/EnglishMorse'

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
        let translated = this.convertToMorse(this.state.input)
    }

    convertToMorse = string => {
        let convertedChars = []
        string.split('').map(e => {
            convertedChars.push(this.convertCharacter(e))
        })
        return convertedChars
    }

    convertCharacter = char => {
        return char
    }

    render() {
        return (
            <div className='morse-container'>
                <form onSubmit={this.handleSubmit} className='morse-form'>
                    <label>Type Something</label>
                    <input name='input' onChange={this.handleChange}/>
                    <button type='submit'>Morse It!</button>
                </form>
                <h1></h1>
            </div>
        )
    }
}

export default Morse