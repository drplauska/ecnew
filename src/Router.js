import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Landing } from './pages';
const haha = 0;

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
