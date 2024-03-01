import { setDoc } from "@firebase/firestore";
import { Todo } from "../components/todo/types";
import { todosDocRef } from "../config/firebase/db";

export default async function addTodos(
  todo: Todo,
  ip: string
): Promise<string> {
  const todoRef = todosDocRef();
  try {
    await setDoc(todoRef, {
      name: todo.name,
      completed: todo.completed,
      createdAt: todo.createdAt,
      ip: ip,
    });

    return todoRef.id;
  } catch (error) {
    console.log(error);
  }
  return "";
}
