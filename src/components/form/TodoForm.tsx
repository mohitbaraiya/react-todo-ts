import React, { useState } from "react";
import cn from "classnames";
export default function TodoForm() {
  // states
  const [todoName, setTodoName] = useState<string>("");
  const [todoNameError, setTodoNameError] = useState<string>("");
  // methods
  function setError(
    todoName: string,
    setTodoNameError: React.Dispatch<React.SetStateAction<string>>
  ) {
    if (todoName.length <= 0) {
      setTodoNameError("Please enter a valid todo name.");
      return true;
    } else {
      setTodoNameError("");
      return false;
    }
  }

  function submitTodoForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (setError(todoName, setTodoNameError)) {
      return;
    }
  }
  function todoNameChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setTodoName(value);
    setError(value, setTodoNameError);
  }
  return (
    <form className="flex space-x-2 items-start" onSubmit={submitTodoForm}>
      <div className="flex-grow">
        <input
          type="text"
          name="name"
          id="name"
          className={cn(
            {
              "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600":
                Boolean(todoNameError),
              "text-red-900 ring-red-300 placeholder:text-red-400 focus:ring-red-600 ":
                Boolean(todoNameError),
            },
            "block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset focus-visible:ring-0 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          )}
          placeholder="Add your task name here"
          onChange={todoNameChangeHandler}
          value={todoName}
        />
        {todoNameError && (
          <p className="text-[10px] mt-1 text-red-500">{todoNameError}</p>
        )}
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-1.5 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
      >
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        ADD
      </button>
    </form>
  );
}
