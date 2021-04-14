
import { NavLink, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BookStore from "./admin/modules/BookStore";
import Category from "./admin/modules/Category";
import Admin from './admin/Admin';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/" component={BookStore} exact />
        <Route path="/admin" component={Admin} />
        <Route path="/public" component={Category} />
      </Switch>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink activeClassName={"active"}   className="navbar-brand" to="/">Book Store </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink activeClassName={"active"}  className="nav-link" to="/admin">Admin </NavLink>
            <NavLink activeClassName={"active"}  className="nav-link" to="/public">Public </NavLink>
          </div>
        </div>
      </div>
    </nav>
    
  );
};


export default App;
