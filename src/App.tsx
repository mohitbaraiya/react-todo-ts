import React from "react";
import TodoForm from "./components/form/TodoForm";
import TodoList from "./components/todo/TodoList";
import TodoContextProvider from "./context/TodoContextProvider";

function App(): React.JSX.Element {
  // const ipFetching = useQuery("ip", fetchIp);

  return (
    <TodoContextProvider>
      <div className="container">
        <div className="sticky top-0 z-10 mt-2 bg-white">
          <TodoForm />
        </div>
        <div className="mt-2">
          <TodoList />
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
