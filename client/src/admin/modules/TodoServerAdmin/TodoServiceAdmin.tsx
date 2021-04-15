import { Post } from "./Model";

export function TodoServerMasterGet() {
   return fetch("http://localhost:4000/v1/todos");

}

export function TodoServerMasterPost(post : Post) {
    return fetch("http://localhost:4000/v1/todo", {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(post)
      });
}


export function TodoServerMasterPatch(post : Post) {
    return fetch("http://localhost:4000/v1/todo", {
        method: 'put',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
}


export function TodoServerMasterDelete(id : string) {
    return fetch("http://localhost:4000/v1/todo/"+ id, {
        method: 'delete'
      });
}
