
import { Link, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookStore from "./modules/BookStore";
import Todo from "./modules/Todo";
function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" component={BookStore} exact />
        <Route path="/todo" component={Todo} />
      </Switch>
    </div>


  );
}


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link  className="navbar-brand" to="/">Book Store </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/todo">Todo </Link>
          </div>
        </div>
      </div>
    </nav>
    // // <div>
    //   <Link to="/">Book Store </Link>
    //   <Link to="/todo">Todo </Link>
    // </div>
  );
};


export default App;
