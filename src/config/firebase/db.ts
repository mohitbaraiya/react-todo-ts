import { DocumentReference, doc, DocumentData } from "@firebase/firestore";
import { db } from "./index";
export const todosRef: DocumentReference<DocumentData, DocumentData> = doc(
  db,
  "todos",
  "h7CKNR7CyBYyZrVKMDNf"
);
