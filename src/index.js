import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router,Switch,Route,Redirect  } from 'react-router-dom';
import { router } from "./router/router"


ReactDOM.render(
  <Router>
    {/* <App /> */}
    <Switch>
      <Route path="/Home" render={
        (router)=><App {...router} />} />
      {
        router.map(route=>
          <Route key={route.pathname} path={route.pathname} component={route.component} />
          )
      }
      <Redirect to="/Home" from="/" />
      <Redirect to="/Login" />
    </Switch>
  </Router>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
