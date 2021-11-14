import React, { useState, useCallback } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import "./style/TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); // value 값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생 시킨다.

      // 이름 방지하기 위해 이 함수를 호출한다.
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <>
      <form className="TodoInsert" onSubmit={onSubmit}>
        <input placeholder="Add Todo" value={value} onChange={onChange} />
        <button type="submit">
          <IoAddCircleSharp />
        </button>
      </form>
    </>
  );
};

export default TodoInsert;
