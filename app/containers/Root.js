// @flow
import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader/root';
import Routes from '../Routes';

const Root = () => (
  <ConnectedRouter>
    <Routes />
  </ConnectedRouter>
);

export default hot(Root);
