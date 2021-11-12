import "./App.css";
import LifeCycleSample from "./components/LifeCycleSample";

import React, { Component } from "react";

// function App() {
//   return (
//     <>
//       <LifeCycleSample />
//     </>
//   );
// }

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };
  render() {
    return (
      <>
        <div>
          <button onClick={this.handleClick}>랜덤 생삭</button>
          <LifeCycleSample color={this.state.color} />
        </div>
      </>
    );
  }
}

export default App;
