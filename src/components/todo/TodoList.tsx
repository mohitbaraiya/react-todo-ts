import React from "react";
import TodoItem from "./TodoItem";
export default function TodoList(): React.JSX.Element {
  const todos = [
    {
      id: "1",
      name: "Leslie Alexander",
      createdAt: "2023-03-04T15:54Z",
      completed: false,
    },
    {
      id: "2",
      name: "Michael Foster",
      createdAt: "2023-03-03T14:02Z",
      completed: true,
    },
    {
      id: "3",
      name: "Dries Vincent",
      createdAt: "2023-03-03T13:23Z",
      completed: false,
    },
    {
      id: "4",
      name: "Lindsay Walton",
      createdAt: "2023-03-02T21:13Z",
      completed: false,
    },
  ];

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}
