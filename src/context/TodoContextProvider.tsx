import React, { useEffect, useState } from "react";
import { Todo } from "../components/todo/types";
import axios from "axios";
import getTodos from "../API/getTodos";
import addTodos from "../API/addTodos";

interface DefaultTodocontextValue {
  todos: Todo[];
  addTodo: (todoDetail: Todo) => Promise<void>;
  toggleTodoStatus: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
}
const defaultcontextValue: DefaultTodocontextValue = {
  todos: [],
  addTodo: async () => {},
  toggleTodoStatus: () => {},
  removeTodo: () => {},
};
export const TodoContext = React.createContext(defaultcontextValue);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  // states
  const [todos, setTodos] = useState<Todo[]>([]);
  const [ip, setIp] = useState<string>("");
  //   effects
  // fetch Ip address
  useEffect(() => {
    (async function (setIp) {
      const res = await axios.get("https://ipinfo.io/json");
      if (typeof res.data.ip === "string") {
        setIp(res.data.ip);
      }
    })(setIp);
  }, []);

  // fetch todos from firebase
  useEffect(() => {
    (async function (setTodos, ip) {
      if (!ip) {
        return;
      }
      const todos = await getTodos();
      setTodos(todos);
    })(setTodos, ip);
  }, [ip]);

  //   methods
  //   add todo
  async function addTodo(todoDetail: Todo): Promise<void> {
    if (ip) {
      todoDetail.id = await addTodos(todoDetail, ip);
    }
    setTodos((prevTodo) => [...prevTodo, todoDetail]);
  }
  //   toggle todo complete status
  function toggleTodoStatus(id: string, completed: boolean) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (id === todo.id) {
          todo.completed = completed;
        }
        return todo;
      });
    });
  }
  function removeTodo(id: string) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  const value: DefaultTodocontextValue = {
    todos: todos,
    addTodo: addTodo,
    toggleTodoStatus: toggleTodoStatus,
    removeTodo: removeTodo,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
