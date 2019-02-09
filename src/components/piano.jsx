import React, { Component } from "react";
import Control from "./piano/control";
import Keyboard from "./piano/keyboard";

class Piano extends Component {
  state = {};
  render() {
    return (
      <div id="piano">
        <Control />
        <Keyboard playMidiHandler={this.props.playMidiHandler} />
      </div>
    );
  }
}

export default Piano;
