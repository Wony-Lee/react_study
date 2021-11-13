import React from "react";
import {
  IoCheckboxOutline,
  IoCheckbox,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import cn from "classnames";
import "./style/TodoListItem.scss";

const TodoListItem = ({ todo }) => {
  const { text, checked } = todo;
  return (
    <>
      <div className="TodoListItem">
        <div className={cn("checkbox", { checked })}>
          {checked ? <IoCheckbox /> : <IoCheckboxOutline />}

          <div className="text">{text}</div>
        </div>
        <div className="remove">
          <IoRemoveCircleOutline />
        </div>
      </div>
    </>
  );
};

export default TodoListItem;
