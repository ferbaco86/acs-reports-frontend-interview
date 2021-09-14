import React from 'react';
import { Router } from '@reach/router';

import Homepage from './components/Homepage';

const AppRouter = () => (
  <Router>
    <Homepage path="/" />
  </Router>
);

export default AppRouter;
