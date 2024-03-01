import { collection, doc, setDoc } from "@firebase/firestore";
import { Todo } from "../components/todo/types";
import { db } from "../config/firebase";

export default async function addTodos(
  todo: Todo,
  ip: string
): Promise<string> {
  try {
    const newTodoRef = doc(collection(db, "todos"));
    await setDoc(newTodoRef, {
      name: todo.name,
      completed: todo.completed,
      createdAt: todo.createdAt,
      ip: ip,
    });

    return newTodoRef.id;
  } catch (error) {
    console.log(error);
  }
  return "";
}
