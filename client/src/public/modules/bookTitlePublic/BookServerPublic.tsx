
import { IBook } from "../bookModel";

export function BookServerMasterGet() {
        // const url = "http://localhost:4000/v1/Architectures";
        return fetch("");
}
export function BookServerMasterPost(book: IBook) {
  return fetch("http://localhost:4000/v1/Architecture", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
}
export function BookServerMasterPut(book: IBook) {
  return fetch("http://localhost:4000/v1/Architecture", {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(book)
  });
}
export function BookServerMasterDelete(id: string) {
  return fetch("http://localhost:4000/v1/Architecture/" + id, {
    method: 'delete'
  });
}
