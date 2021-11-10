import React, { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("1");
    const onClickEnter = () => setMessage("Hi");
    const onClickLeave = () => setMessage("Bye");
    return (
        <>
            <div>
                <button onClick={onClickEnter}>입장</button>
                <button onClick={onClickLeave}>퇴장</button>
                <p>{message}</p>
            </div>
        </>
    );
};

export default Say;
