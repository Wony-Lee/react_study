import React from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import "./style/TodoInsert.scss";

const TodoInsert = () => {
  return (
    <>
      <form className="TodoInsert">
        <input placeholder="Add Todo" />
        <button type="submit">
          <IoAddCircleSharp />
        </button>
      </form>
    </>
  );
};

export default TodoInsert;
