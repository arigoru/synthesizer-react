import React, { Component } from "react";

class Key extends Component {
  state = {};
  render() {
    return renderKey(
      this.props.hasFlat,
      this.props.note,
      this.props.playMidiHandler
    );
  }
}

function renderKey(hasFlat, note, handler) {
  return (
    <div className="piano-key" onMouseDown={() => handler(note)}>
      {hasFlat && (
        <div
          className="piano-key-black"
          onMouseDown={() => handler(note - 1)}
        />
      )}
    </div>
  );
}

export default Key;
