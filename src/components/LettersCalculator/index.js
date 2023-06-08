// Write your code here.
import {Component} from 'react'

import './index.css'

class LetterCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInput = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state
    return (
      <div className="bg-container">
        <div className="img-container">
          <img
            alt="letters calculator"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
        <div className="text">
          <h1>Calculate the Letters you enter</h1>
          <label htmlFor="phraseText">Enter the phrase</label>
          <input
            id="phraseText"
            type="text"
            placeholder="calculator"
            onChange={this.onChangeInput}
            value={inputPhrase}
          />
          <p>No.of letters: {inputPhrase.length}</p>
        </div>
      </div>
    )
  }
}

export default LetterCalculator
