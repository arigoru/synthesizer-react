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
    console.log("click ", soundId);
    this.updateDisplay(soundId);
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  };

  keyDownHandler = e => {
    switch (e.key) {
      case "q":
        this.playSoundFile("Q");
        break;
      case "w":
        this.playSoundFile("W");
        break;
      case "e":
        this.playSoundFile("E");
        break;
      case "a":
        this.playSoundFile("A");
        break;
      case "s":
        this.playSoundFile("S");
        break;
      case "d":
        this.playSoundFile("D");
        break;
      case "z":
        this.playSoundFile("Z");
        break;
      case "x":
        this.playSoundFile("X");
        break;
      case "c":
        this.playSoundFile("C");
        break;
      default:
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler);
  }

  render() {
    return (
      <div tabIndex="0" className="App" ref={ref => (this.appDiv = ref)}>
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
