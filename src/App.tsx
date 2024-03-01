import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/todo/TodoList";
import { Todo } from "./components/todo/types";
import getTodos from "./API/getTodos";

function App(): React.JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [ip, setIp] = useState<string>("");
  // const ipFetching = useQuery("ip", fetchIp);

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
