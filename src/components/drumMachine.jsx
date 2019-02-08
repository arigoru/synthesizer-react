import React, { Component } from "react";
import DrumPad from "./drumMachine/drumPad";
import Display from "./drumMachine/display";

class DrumMachine extends Component {
  state = {
    drumPads: [
      {
        id: "Q",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
      },
      {
        id: "W",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
      },
      {
        id: "E",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
      },
      {
        id: "A",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
      },
      {
        id: "S",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
      },
      {
        id: "D",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        id: "Z",
        soundUrl:
          "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
      },
      {
        id: "X",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
      },
      {
        id: "C",
        soundUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
      }
    ]
  };

  render() {
    return (
      <div id="drum-machine">
        <Display text={this.props.displayText} />
        {renderDrumPads(this.state.drumPads, this.props.playHandler)}
      </div>
    );
  }
}

function renderDrumPads(drumPads, handler) {
  return drumPads.map(e => (
    <DrumPad
      onClick={() => handler(e.id)}
      key={e.id}
      id={e.id}
      soundUrl={e.soundUrl}
    />
  ));
}

export default DrumMachine;
