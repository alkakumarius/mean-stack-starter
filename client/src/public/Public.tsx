
import {  NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import BookTitle from './modules/bookTitlePublic/BookTitle';
import Category from './modules/categoryPublic/CategoryPublic';


export default function Public() {
  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/category`}>Category</NavLink>
        </li> 
        <li className="nav-item">
          <NavLink activeClassName={"active"}  className="nav-link" to={`${url}/bookTitle`}>BookTitle</NavLink>
        </li>       
      </ul>

      <Switch>
        <Route exact path={path}>
          <Category/>
        </Route>
        <Route path={`${path}/category`}>
          <Category/>
        </Route> 
        <Route path={`${path}/booktitle`}>
          <BookTitle/>
        </Route>      
      </Switch>
    </div>
  );
}



