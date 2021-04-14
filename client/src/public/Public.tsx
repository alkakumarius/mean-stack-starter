
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import CategoryItem from './modules/category/CategoryItem';


export default function Public() {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/categoryItem`}>CategoryItem</NavLink>
        </li>       
      </ul>

      <Switch>
        <Route exact path={path}>
          <CategoryItem />
        </Route>
        <Route path={`${path}/categoryItem`}>
          <CategoryItem />
        </Route>      
      </Switch>
    </div>
  );
}



