import { useState } from "react";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/todo/TodoList";

interface Todo {
  name: string;
  id: string;
  createdAt: string;
}
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <>
      <div className="container">
        <div className="mt-2">
          <TodoForm />
        </div>
        <div className="mt-2">
          <TodoList />
        </div>
      </div>
    </>
  );
}

export default App;
