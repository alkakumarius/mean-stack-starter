
import { Category } from "./Model";

export function CategoryServerMasterGet() {
  return fetch("http://localhost:4000/v1/categorys");
}
export function CategoryServerMasterPost(category: Category) {
  return fetch("http://localhost:4000/v1/category", {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  });
}
export function CategoryServerMasterPut(category: Category) {
  return fetch("http://localhost:4000/v1/category", {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(category)
  });
}
export function CategoryServerMasterDelete(id: string) {
  return fetch("http://localhost:4000/v1/category/" + id, {
    method: 'delete'
  });
}
