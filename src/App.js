import React from "react";
//import "./styles.css";
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
import MainPage from "./pages/index";
import NotFoundPage from "./pages/404";
import UsersPage from "./pages/users"

export default class App extends React.Component {
  render(){
  return (
    <Router>
      <Switch>
      <Route exact path ="/" component={MainPage}/>
      <Route exact path="/404" component={NotFoundPage}/>
       <Route exact path="/users" component={UsersPage} />
      <Redirect to ="/404"/>
      </Switch>
      </Router>
  );
}
}