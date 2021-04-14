
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import Category from './modules/category/Category';


export default function Public() {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/category`}>Category</NavLink>
        </li>       
      </ul>

      <Switch>
        <Route exact path={path}>
          <Category/>
        </Route>
        <Route path={`${path}/category`}>
          <Category/>
        </Route>      
      </Switch>
    </div>
  );
}



