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
        this.setState({
          [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        let translated = this.convertToMorse(this.state.input)
        this.setState({
            result: translated.join(' ')
        })
    }

    convertToMorse = string => {
        let convertedChars = []
        // console.log(string.split(/(\s+)/))
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
                    <button className='morse-button' type='submit'>Morse It!</button>
                    <h3 className='morse-result-label'>Result</h3>
                    <div className='morse-result-text'>{this.state.result}</div>
                    <div className='morse-audio'>{this.state.audio ? this.displayAudio() : ''}</div>
                </form>
            </div>
        )
    }
}

export default Morse