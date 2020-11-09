import Router from './config/routes';
import React from 'react';
import { Switch, HashRouter, Redirect, Route } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <Switch>
        {
          Router.map(
            (item, index) => <Route key={index.toString()} path={item.path} name={item.name} component={item.component} />
          )
        }
        <Redirect exact from="**" to='/home' />
      </Switch>
    </HashRouter>
  );
}

export default App;
