(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),s=a.n(r),c=(a(14),a(1)),l=a(2),i=a(4),u=a(3),h=a(5),p=(a(16),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{onClick:this.props.onClick,className:"drum-pad",id:"drum".concat(this.props.id)},o.a.createElement("audio",{src:this.props.soundUrl,className:"clip",id:this.props.id}),this.props.id)}}]),t}(n.Component)),d=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"display"},this.props.text)}}]),t}(n.Component);var m=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={drumPads:[{id:"Q",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{id:"W",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{id:"E",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{id:"A",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{id:"S",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{id:"D",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{id:"Z",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{id:"X",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{id:"C",soundUrl:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"drum-machine"},o.a.createElement(d,{text:this.props.displayText}),(e=this.state.drumPads,t=this.props.playHandler,e.map(function(e){return o.a.createElement(p,{onClick:function(){return t(e.id)},key:e.id,id:e.id,soundUrl:e.soundUrl})})));var e,t}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"control-wrapper"},o.a.createElement("span",null))}}]),t}(n.Component),F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"piano-control"},o.a.createElement("span",null))}}]),t}(n.Component);var f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return e=this.props.hasFlat,this.props.note,o.a.createElement("div",{className:"piano-key"},e&&o.a.createElement("div",{className:"piano-key-black"}));var e}}]),t}(n.Component);var v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a.getClasses=function(){return"piano-octave".concat(1===a.props.keys.length?" piano-octave-last":"")},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:this.getClasses()},this.props.keys.map(function(e){return o.a.createElement(f,{key:e.note,note:e.note,hasFlat:e.hasFlat})}))}}]),t}(n.Component);var b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={octaves:[[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1},{note:"D",hasFlat:!0},{note:"E",hasFlat:!0},{note:"F",hasFlat:!1},{note:"G",hasFlat:!0},{note:"A",hasFlat:!0},{note:"B",hasFlat:!0}],[{note:"C",hasFlat:!1}]]},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"piano-keys"},this.state.octaves.map(function(e,t){return o.a.createElement(v,{key:t,keys:e})}))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{id:"piano"},o.a.createElement(F,null),o.a.createElement(b,null))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={drumDisplayText:""},a.updateDisplay=function(e){a.setState({drumDisplayText:e})},a.playSoundFile=function(e){console.log("click ",e),a.updateDisplay(e);var t=document.getElementById(e);t.currentTime=0,t.play()},a.keyDownHandler=function(e){switch(e.key){case"q":a.playSoundFile("Q");break;case"w":a.playSoundFile("W");break;case"e":a.playSoundFile("E");break;case"a":a.playSoundFile("A");break;case"s":a.playSoundFile("S");break;case"d":a.playSoundFile("D");break;case"z":a.playSoundFile("Z");break;case"x":a.playSoundFile("X");break;case"c":a.playSoundFile("C")}},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.keyDownHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keyDownHandler)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{tabIndex:"0",className:"App",ref:function(t){return e.appDiv=t}},o.a.createElement(m,{displayText:this.state.drumDisplayText,playHandler:this.playSoundFile}),o.a.createElement(y,null),o.a.createElement(O,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.c29a7a1c.chunk.js.map