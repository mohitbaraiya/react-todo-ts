import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import NoTodo from "./NoTodo";
import { AnimatePresence } from "framer-motion";
import { TodoContext } from "../../context/TodoContextProvider";
import TodoLoader from "./TodoLoader";

export default function TodoList(): React.JSX.Element {
  const { todos, isLoading } = useContext(TodoContext);
  return (
    <div>
      {todos.length === 0 ? (
        <>{isLoading ? <TodoLoader /> : <NoTodo />}</>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}
