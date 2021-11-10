import React, { Component } from "react";

class EventPracticeClass extends Component {
  state = {
    username: "",
    message: "",
  };

  handleChage = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + " : " + this.state.message);
    this.setState({
      message: "",
    });
  };

  handleKeyPress = (e) => {
    if (e.key === "Enter") this.handleClick();
  };
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="any"
          value={this.state.username}
          onChange={this.handleChage}
        />
        <input
          type="text"
          name="message"
          placeholder="any"
          value={this.state.message}
          onChange={this.handleChage}
          onKeyPress={this.handleKeyPress}
        />
        <button onClick={this.handleClick}>확인</button>
      </>
    );
  }
}

export default EventPracticeClass;
