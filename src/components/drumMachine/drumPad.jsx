import React, { Component } from "react";

class DrumPad extends Component {
  state = {};
  render() {
    return (
      <div
        onClick={this.props.onClick}
        className="drum-pad noselect"
        id={`drum${this.props.id}`}
      >
        <audio src={this.props.soundUrl} className="clip" id={this.props.id} />
        {this.props.id}
      </div>
    );
  }
}

export default DrumPad;
