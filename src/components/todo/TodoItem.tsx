import React from "react";
import { Todo } from "./types";
import classNames from "classnames";

export default function TodoItem({ todo }: { todo: Todo }): React.JSX.Element {
  return (
    <li key={todo.id} className="relative flex items-start py-4">
      <div className="flex items-center h-6 mr-3">
        <input
          id={`todo-${todo.id}`}
          name={`todo-${todo.id}`}
          type="checkbox"
          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-600"
          checked={todo.completed}
        />
      </div>
      <div className="flex-1 min-w-0 text-sm leading-6">
        <label
          htmlFor={`todo-${todo.id}`}
          className={classNames(
            { "line-through": todo.completed },
            "font-medium text-gray-900 select-none"
          )}
        >
          {todo.name}
        </label>
      </div>
    </li>
  );
}
