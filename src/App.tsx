import React, { useState } from "react";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./components/todo/types";

function App(): React.JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <div className="container">
        <div className="mt-2">
          <TodoForm setTodos={setTodos} />
        </div>
        <div className="mt-2">
          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
