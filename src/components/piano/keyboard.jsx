import React, { Component } from "react";
import Octave from "./octave";

class Keyboard extends Component {
  /* Revisit state setup later! */
  state = {
    octaves: [
      [
        { note: 24, hasFlat: false },
        { note: 26, hasFlat: true },
        { note: 28, hasFlat: true },
        { note: 29, hasFlat: false },
        { note: 31, hasFlat: true },
        { note: 33, hasFlat: true },
        { note: 35, hasFlat: true }
      ],
      [
        { note: 36, hasFlat: false },
        { note: 38, hasFlat: true },
        { note: 40, hasFlat: true },
        { note: 41, hasFlat: false },
        { note: 43, hasFlat: true },
        { note: 45, hasFlat: true },
        { note: 47, hasFlat: true }
      ],
      [
        { note: 48, hasFlat: false },
        { note: 50, hasFlat: true },
        { note: 52, hasFlat: true },
        { note: 53, hasFlat: false },
        { note: 55, hasFlat: true },
        { note: 57, hasFlat: true },
        { note: 59, hasFlat: true }
      ],
      [
        { note: 60, hasFlat: false },
        { note: 62, hasFlat: true },
        { note: 64, hasFlat: true },
        { note: 65, hasFlat: false },
        { note: 67, hasFlat: true },
        { note: 69, hasFlat: true },
        { note: 71, hasFlat: true }
      ],
      [
        { note: 72, hasFlat: false },
        { note: 74, hasFlat: true },
        { note: 76, hasFlat: true },
        { note: 77, hasFlat: false },
        { note: 79, hasFlat: true },
        { note: 81, hasFlat: true },
        { note: 83, hasFlat: true }
      ],
      [
        { note: 84, hasFlat: false },
        { note: 86, hasFlat: true },
        { note: 88, hasFlat: true },
        { note: 89, hasFlat: false },
        { note: 91, hasFlat: true },
        { note: 93, hasFlat: true },
        { note: 95, hasFlat: true }
      ],
      [
        { note: 96, hasFlat: false },
        { note: 98, hasFlat: true },
        { note: 100, hasFlat: true },
        { note: 101, hasFlat: false },
        { note: 103, hasFlat: true },
        { note: 105, hasFlat: true },
        { note: 107, hasFlat: true }
      ],
      [{ note: 108, hasFlat: false }]
    ]
  };
  render() {
    return (
      <div id="piano-keys">
        {renderOctaves(this.state.octaves, this.props.playMidiHandler)}
      </div>
    );
  }
}

function renderOctaves(octaves, handler) {
  return octaves.map((e, i) => (
    <Octave playMidiHandler={handler} key={i} keys={e} />
  ));
}

export default Keyboard;
