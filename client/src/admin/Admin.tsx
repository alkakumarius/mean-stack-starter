
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Category from './modules/Category';
import Todo from './modules/Todo';
import TodoServer from './modules/TodoServer';


export default function Admin() {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/category`}>Category</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/todo`}>Todo</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/todoServer`}>Todoserver</NavLink>
        </li>
       
      </ul>

      <Switch>
        <Route exact path={path}>
          <Category />
        </Route>
        <Route path={`${path}/category`}>
          <Category />
        </Route>
        <Route path={`${path}/todo`}>
          <Todo />
        </Route>
        <Route path={`${path}/todoServer`}>
          <TodoServer/>
        </Route>
        
      </Switch>
    </div>
  );
}



