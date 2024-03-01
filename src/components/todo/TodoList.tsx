import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import NoTodo from "./NoTodo";
import { AnimatePresence } from "framer-motion";
import { TodoContext } from "../../context/TodoContextProvider";

export default function TodoList(): React.JSX.Element {
  const { todos } = useContext(TodoContext);
  return (
    <div>
      {todos.length === 0 ? (
        <NoTodo />
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
