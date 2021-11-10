import React, { Component } from "react";

class Counter extends Component {
    state = {
        number: 0,
        fixedNumber: 0,
    };
    render() {
        const { number, fixedNumber } = this.state; // state 를 조회할 때는 this.state로 조회한다.
        return (
            <>
                <h1>{number}</h1>
                <h1>fixed = {fixedNumber}</h1>
                <button
                    // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정함.
                    onClick={() => {
                        // this.setState를 사용해서 state에 새로운 값을 넣을 수 있음.
                        this.setState({ number: number + 1 });
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        this.setState({ number: number - 1 });
                    }}
                >
                    -
                </button>
            </>
        );
    }
}

export default Counter;
