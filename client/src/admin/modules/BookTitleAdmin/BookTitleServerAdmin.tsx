import { BookTitle } from "./ModelBook";


export function BookTitleServerMasterGet() {
  return fetch("http://localhost:4000/v1/books");
}
export function BookTitleServerMasterPost(bookTitle: BookTitle) {
  return fetch("http://localhost:4000/v1/book", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookTitle)
  });
}
export function BookTitleServerMasterPut(bookTitle: BookTitle) {
  return fetch("http://localhost:4000/v1/book", {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookTitle)
  });
}
export function BookTitleServerMasterDelete(id: string) {
  return fetch("http://localhost:4000/v1/book/" + id, {
    method: 'delete'
  });
}
