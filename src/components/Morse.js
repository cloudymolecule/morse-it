import '../styles/Morse.css'
import React, { Component } from 'react'
import { EnglishMorse } from '../constants/EnglishMorse'

class Morse extends Component {
    
    state = { 
        input: '',
        result: '',
        audio: false
    }
    
    handleChange = e => {
        let translated = this.convertToMorse(this.state.input)
        this.setState({
          [e.target.name] : e.target.value,
          audio: true,
          result: translated
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            input: '',
            result: '',
            audio: false
        })
    }

    convertToMorse = string => {
        let convertedChars = []
        string.split('').map(e => {
            return convertedChars.push(this.convertCharacter(e)) 
        })
        return convertedChars
    }

    convertCharacter = char => {
        let converted = ''
        EnglishMorse.map(e => {
            if (e.letter === char.toLowerCase()) {
                converted = e.morse
            }
            return e
        })
        return converted
    }

    displayAudio = () => {
        return <button className='morse-audio-button'>Hello!</button>
    }

    render() {
        return (
            <div className='morse-container'>
                <form onSubmit={this.handleSubmit} className='morse-form'>
                    <h3 className='morse-label'>Type Something</h3>
                    <div className='morse-input-container'>
                        <input className='morse-input' name='input' onChange={this.handleChange} maxLength='50'/>
                    </div>
                    <button className='morse-button' type='submit'>Clear</button>
                    <h3 className='morse-result-label'>Result</h3>
                    <div className='morse-result-text'>{this.state.result}</div>
                    <div className='morse-audio'>{this.state.audio ? this.displayAudio() : ''}</div>
                </form>
            </div>
        )
    }
}

export default Morse