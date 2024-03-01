import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./types";
import NoTodo from "./NoTodo";
import { AnimatePresence } from "framer-motion";

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}): React.JSX.Element {
  return (
    <div>
      {todos.length === 0 ? (
        <NoTodo />
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          <AnimatePresence>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}
