import React, { Component } from "react";

class EventPractice extends Component {
    state = {
        message: "",
    };
    constructor(props) {
        super(props);
        this.handleChage = this.handleChage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChage(e) {
        this.setState({
            message: e.target.value,
        });
    }
    handleClick() {
        alert(this.state.message);
        this.setState({
            message: "",
        });
    }
    render() {
        return (
            <>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="any"
                    value={this.state.message}
                    onChange={this.handleChage}
                />
                <button onClick={this.handleClick}>확인</button>
            </>
        );
    }
}

export default EventPractice;
