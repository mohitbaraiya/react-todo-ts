import {
  getDocs,
  limit,
  orderBy,
  query,
  // startAt,
  where,
} from "@firebase/firestore";
import { Todo } from "../components/todo/types";
import { todoRef } from "../config/firebase/db";

export default async function getTodos(ip: string): Promise<Todo[]> {
  const todos: Todo[] = [];
  try {
    const todoSnap = await getDocs(
      query(
        todoRef,
        where("ip", "==", ip),
        orderBy("createdAt", "desc"),
        limit(10)
      )
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
