import React, { useState } from "react";
import "./App.css";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "자고 일어나면 씻기",
      checked: true,
    },
    {
      id: 2,
      text: "밥먹기",
      checked: true,
    },
    {
      id: 3,
      text: "공부하기",
      checked: false,
    },
  ]);
  return (
    <>
      <TodoTemplate>
        <TodoInsert />
        <TodoList todos={todos} />
      </TodoTemplate>
    </>
  );
};

export default App;
