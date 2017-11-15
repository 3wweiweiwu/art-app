import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import PrestagingPage from './prestaging/PrestagingPage';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/prestaging" component={PrestagingPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </main>
);

export default Main;
