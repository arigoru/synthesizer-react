import React, { Component } from "react";

class Key extends Component {
  state = {};
  render() {
    return renderKey(this.props.hasFlat, this.props.note);
  }
}

function renderKey(hasFlat, note) {
  return (
    <div className="piano-key">
      {hasFlat && <div className="piano-key-black" />}
    </div>
  );
}

export default Key;
