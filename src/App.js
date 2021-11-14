import React, { useState, useCallback, useRef } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(2501);
  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos((todos) => todos.concat(todo));
    nextId.current += 1; // nextId 1씩 증가
  }, []);
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((item) => item.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </>
  );
};

export default App;
