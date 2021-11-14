import React from "react";
import {
  IoCheckboxOutline,
  IoCheckbox,
  IoRemoveCircleOutline,
} from "react-icons/io5";
import cn from "classnames";
import "./style/TodoListItem.scss";

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <>
      <div className="TodoListItem-virtualized" style={style}>
        <div className="TodoListItem">
          <div
            className={cn("checkbox", { checked })}
            onClick={() => onToggle(id)}
          >
            {checked ? <IoCheckbox /> : <IoCheckboxOutline />}

            <div className="text">{text}</div>
          </div>
          <div className="remove" onClick={() => onRemove(id)}>
            <IoRemoveCircleOutline />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(
  TodoListItem,
  (prevProps, nextProps) => prevProps.todo === nextProps.todo
);
