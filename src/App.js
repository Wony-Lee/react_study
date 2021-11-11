import "./App.css";
import ScrollBoxClass from "./components/ScrollBoxClass";

import React, { Component } from "react";

// function App() {
//   return (
//     <>
//       <ScrollBoxClass />
//       <button onClick={() => this.scrollBox.scrollToButton()}>맨 밑으로</button>
//     </>
//   );
// }

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBoxClass ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToButton()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;
