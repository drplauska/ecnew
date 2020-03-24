import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Landing } from './pages';

function Router() {
  const siaip = 123;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
