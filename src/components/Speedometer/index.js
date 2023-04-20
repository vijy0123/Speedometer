// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onClickApplyBrakeButton = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onClickAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
          <h1 className="speed-text">Speed is {speed}mph</h1>
          <p className="speed-limit">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="button-container">
            <button
              className="accelerate-button button"
              type="button"
              onClick={this.onClickAccelerateButton}
            >
              Accelerate
            </button>
            <button
              className="apply-brake-button button"
              type="button"
              onClick={this.onClickApplyBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Speedometer
