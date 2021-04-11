import TodoMaster from "./Todo/TodoMaster";
import TodoServerMaster from "./TodoServer/TodoMaster";

function Todo() {
  return (
   
    <div className="container">
      <br/>
      {/* <h1><span className="badge badge-secondary">Server</span></h1> */}
      <TodoServerMaster />
      {/* <hr /> */}
      {/* <h1><span className="badge badge-secondary">Client</span></h1>
      <TodoMaster /> */}
    </div>

  );
}

export default Todo;
