import { IMasterList, Post } from '../Model';

export default function TodoList(props: IMasterList) {

  return (
    <div >
      <h1>Show Posts</h1>
      <hr/>
      {props.postList.length > 0 ? (<table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Email</th>
            <th scope="col">Comment</th>
            <th scope="col">Type</th>
            <th scope="col">Checked</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.postList.map((post: Post, id: number) => {
            console.log(post)
              const _id = post._id!; 
              return (
              <tr key={_id}>
                <th scope="row">{id + 1}</th>
                <td>{post.email}</td>
                <td>{post.comment}</td>
                <td>{post.type}</td>
                <td>{post.checked+""}</td>
                <td>
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button onClick={() => {
                      props.deleteCallback(_id);
                    }} type="button" className="btn btn-danger">Delete Post</button>
                    <button onClick={() => {
                      props.updateCallback(post);
                    }}
                      type="button" className="btn btn-warning">Update Post</button>
                  </div>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
      ) :
        (
          <div>
            No post yet!
          </div>
        )
      }
    </div>
  );
}