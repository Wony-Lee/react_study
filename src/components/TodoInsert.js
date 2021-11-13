import React, { useState, useCallback } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import "./style/TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <>
      <form className="TodoInsert">
        <input placeholder="Add Todo" value={value} onChange={onChange} />
        <button type="submit">
          <IoAddCircleSharp />
        </button>
      </form>
    </>
  );
};

export default TodoInsert;
