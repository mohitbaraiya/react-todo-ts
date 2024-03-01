import React from "react";
import { Todo } from "./types";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function TodoItem({
  todo,
  setTodos,
}: {
  todo: Todo;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}): React.JSX.Element {
  // method
  //   complete and incomplete todo
  function toggleTodoCompleteStatus(
    id: string,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const completed = event.target.checked;
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (id === todo.id) {
          todo.completed = completed;
        }
        return todo;
      });
    });
  }
  //   remove todo

  function removeTodoItem(
    id: string,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
  ) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  return (
    <motion.li
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="relative flex items-start py-4"
      key={todo.id}
    >
      <div className="flex-1">
        <input
          className="hidden"
          type="checkbox"
          id={`todo_${todo.id}`}
          checked={todo.completed}
          name={`todo_${todo.id}`}
          onChange={toggleTodoCompleteStatus.bind(null, todo.id, setTodos)}
        />
        <label
          className="flex items-center px-2 rounded cursor-pointer hover:bg-gray-100"
          htmlFor={`todo_${todo.id}`}
        >
          <span
            className={classNames("w-5 h-5 border-2 rounded-full", {
              "border-gray-300 text-transparent": !todo.completed,
              "bg-indigo-500 border-indigo-500 text-white": todo.completed,
            })}
          >
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <p
            className={classNames("flex-1 ml-4 text-sm", {
              "line-through": todo.completed,
            })}
          >
            {todo.name}
          </p>
        </label>
      </div>
      <button onClick={removeTodoItem.bind(null, todo.id, setTodos)}>
        <svg
          className="w-4 h-4 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M18.4555 5.54446L5.54443 18.4555"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.4555 18.4555L5.54443 5.54446"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </motion.li>
  );
}
