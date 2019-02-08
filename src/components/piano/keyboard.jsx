import React, { Component } from "react";
import Octave from "./octave";

class Keyboard extends Component {
  /* Revisit state setup later! */
  state = {
    octaves: [
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [
        { note: "C", hasFlat: false },
        { note: "D", hasFlat: true },
        { note: "E", hasFlat: true },
        { note: "F", hasFlat: false },
        { note: "G", hasFlat: true },
        { note: "A", hasFlat: true },
        { note: "B", hasFlat: true }
      ],
      [{ note: "C", hasFlat: false }]
    ]
  };
  render() {
    return <div id="piano-keys">{renderOctaves(this.state.octaves)}</div>;
  }
}

function renderOctaves(octaves) {
  return octaves.map((e, i) => <Octave key={i} keys={e} />);
}

export default Keyboard;
