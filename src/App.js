import React, { Component } from "react";
import "./App.css";
import DrumMachine from "./components/drumMachine";
import ControlPanel from "./components/controlPanel";
import Piano from "./components/piano";

class App extends Component {
  state = {
    drumDisplayText: ""
  };

  updateDisplay = text => {
    this.setState({
      drumDisplayText: text
    });
  };

  playSoundFile = soundId => {
    this.updateDisplay(soundId);
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  };

  keyDownHandler = e => {
    switch (e.keyCode) {
      case 81:
        this.playSoundFile("Q");
        break;
      case 87:
        this.playSoundFile("W");
        break;
      case 69:
        this.playSoundFile("E");
        break;
      case 65:
        this.playSoundFile("A");
        break;
      case 83:
        this.playSoundFile("S");
        break;
      case 68:
        this.playSoundFile("D");
        break;
      case 90:
        this.playSoundFile("Z");
        break;
      case 88:
        this.playSoundFile("X");
        break;
      case 67:
        this.playSoundFile("C");
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    // document.addEventListener("keydown", this.keyDownHandler);
    this.appDiv.focus();
  }
  componentWillUnmount() {
    // document.removeEventListener("keydown", this.keyDownHandler);
  }

  render() {
    return (
      <div
        tabIndex="0"
        className="App"
        onKeyDown={this.keyDownHandler}
        ref={ref => (this.appDiv = ref)}
      >
        <DrumMachine
          displayText={this.state.drumDisplayText}
          playHandler={this.playSoundFile}
        />
        <ControlPanel />
        <Piano />
      </div>
    );
  }
}

export default App;
