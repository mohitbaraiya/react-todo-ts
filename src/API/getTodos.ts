import { collection, getDocs, query } from "@firebase/firestore";
import { Todo } from "../components/todo/types";
import { db } from "../config/firebase";

export default async function getTodos(): Promise<Todo[]> {
  const todos: Todo[] = [];
  try {
    const todoSnap = await getDocs(query(collection(db, "todos")));

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
