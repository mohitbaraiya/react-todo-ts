import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "@firebase/firestore";
import { Todo } from "../components/todo/types";
import { db } from "../config/firebase";

export default async function getTodos(ip: string): Promise<Todo[]> {
  const todos: Todo[] = [];
  try {
    const todoRef = collection(db, "todos");
    const todoSnap = await getDocs(
      query(todoRef, where("ip", "==", ip), orderBy("createdAt", "desc"))
    );

    if (todoSnap) {
      todoSnap.forEach((todo) => {
        const todoDetail = todo.data();

        todos.push({
          id: todo?.id,
          name: todoDetail?.name,
          completed: todoDetail?.completed,
          createdAt: todoDetail?.createdAt,
        });
      });
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  } catch (error) {
    console.log(error);
  }
  return todos;
}
