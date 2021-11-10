import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    userName: "",
    message: "",
  });
  const { userName, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존의 form 내용을 이 자리에 복사한다.
      [e.target.name]: e.target.value, // 원하는 값을 덮어 씌운다.
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(userName + " : " + message);
    setForm({
      userName: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };
  return (
    <>
      <input
        type="text"
        value={userName}
        name="userName"
        placeholder="name"
        onChange={onChange}
      />
      <input
        type="text"
        value={message}
        name="message"
        placeholder="message"
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </>
  );
};

export default EventPractice;
