import TodoMaster from "./modules/Todo/TodoMaster";
import TodoServerMaster from "./modules/TodoServer/TodoMaster";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
      <h1><span className="badge badge-secondary">Server</span></h1>
      <TodoServerMaster />
      <hr />
      <h1><span className="badge badge-secondary">Client</span></h1>
      <TodoMaster />
    </div>

  );
}

export default App;
