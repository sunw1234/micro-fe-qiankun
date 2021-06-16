import React from 'react';
import { BrowserRouter as Router, Route, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from './App';
import About from './About';
import User from './User';

export default function RouterConfig() {
  const history = createMemoryHistory();
  return (
    <Router>
      <Route path="/about" component={About}/>
      <Route path="/user" component={User}/>
      <Route path="/" exact component={App} />
    </Router>
  )
};