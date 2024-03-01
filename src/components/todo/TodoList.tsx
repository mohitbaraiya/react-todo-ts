import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./types";
import NoTodo from "./NoTodo";

export default function TodoList({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}): React.JSX.Element {
  return (
    <div className="max-h-screen">
      {todos.length === 0 ? (
        <NoTodo />
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} setTodos={setTodos} />
          ))}
        </ul>
      )}
    </div>
  );
}
