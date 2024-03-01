import {
  DocumentReference,
  doc,
  DocumentData,
  collection,
} from "@firebase/firestore";
import { db } from "./index";
export const todoRef = collection(db, "todos");
export const todosDocRef: () => DocumentReference<
  DocumentData,
  DocumentData
> = () => doc(todoRef);
