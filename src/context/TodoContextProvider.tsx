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
  isLoading: boolean;
}
const defaultcontextValue: DefaultTodocontextValue = {
  todos: [],
  addTodo: async () => {},
  toggleTodoStatus: () => {},
  removeTodo: () => {},
  isLoading: false,
};
export const TodoContext = React.createContext(defaultcontextValue);

export default function TodoContextProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  // states
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [ip, setIp] = useState<string>("");
  //   effects
  // fetch Ip address
  useEffect(() => {
    (async function (setIp, setTodos) {
      try {
        setIsLoading(true);

        const res = await axios.get("https://ipinfo.io/json");
        if (typeof res.data.ip === "string") {
          setIp(res.data.ip);

          if (!res.data.ip) {
            setIsLoading(false);

            return;
          }
          setIsLoading(true);
          const todos = await getTodos(res.data.ip);
          setTodos(todos);
          setIsLoading(false);
        }
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    })(setIp, setTodos);
  }, []);

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
    isLoading: isLoading,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
