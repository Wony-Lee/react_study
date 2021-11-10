import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("1");
    const onClickEnter = () => setMessage("Hi");
    const onClickLeave = () => setMessage("Bye");

    const [color, setColor] = useState("black");
    return (
        <>
            <div>
                <button onClick={onClickEnter}>입장</button>
                <button onClick={onClickLeave}>퇴장</button>
                <p style={{ color }}>{message}</p>
                <button
                    style={{ color: "red" }}
                    onClick={() => setColor("red")}
                >
                    red
                </button>

                <button
                    style={{ color: "green" }}
                    onClick={() => setColor("green")}
                >
                    green
                </button>

                <button
                    style={{ color: "blue" }}
                    onClick={() => setColor("blue")}
                >
                    blue
                </button>
            </div>
        </>
    );
};

export default Say;
