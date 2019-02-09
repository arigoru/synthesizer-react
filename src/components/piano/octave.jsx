import React, { Component } from "react";
import Key from "./key";

class Octave extends Component {
  state = {};

  getClasses = () => {
    return "piano-octave".concat(
      this.props.keys.length === 1 ? " piano-octave-last" : ""
    );
  };

  render() {
    return (
      <div className={this.getClasses()}>
        {renderKeys(this.props.keys, this.props.playMidiHandler)}
      </div>
    );
  }
}

function renderKeys(keys, handler) {
  return keys.map(e => {
    return (
      <Key
        playMidiHandler={handler}
        key={e.note}
        note={e.note}
        hasFlat={e.hasFlat}
      />
    );
  });
}

export default Octave;
