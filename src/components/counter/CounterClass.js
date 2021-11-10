import React, { Component } from "react";

class Counter extends Component {
    // state를 constructor에서 꺼내기
    // 이렇게 하면 consturctor 메서드를 선언하지 않고도 state 초기 값을 설정할 수 있다.
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
                        this.setState(
                            {
                                number: number + 1,
                            },
                            () => {
                                console.log("state");
                            }
                        );
                    }}
                >
                    +
                </button>
                <button
                    onClick={() => {
                        this.setState((prevState) => ({
                            number: prevState.number - 1,
                        }));
                    }}
                >
                    -
                </button>
            </>
        );
    }
}

export default Counter;
