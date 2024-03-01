import React, { useState } from "react";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./components/todo/types";

function App(): React.JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <div className="container">
        <div className="sticky top-0 z-10 mt-2 bg-white">
          <TodoForm setTodos={setTodos} />
        </div>
        <div className="mt-2">
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </>
  );
}

export default App;
