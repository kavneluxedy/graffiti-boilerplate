import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" element={<App />} />
      <Route path="home" component={Home} />
      {/* <Route path={routes.COUNTER} component={CounterPage} /> */}
    </Switch>
  </BrowserRouter>
);
