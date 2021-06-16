import React from 'react';
import { Route, MemoryRouter, Redirect } from 'react-router-dom';
import About from './About';
import User from './User';

export default function RouterConfig() {

  return (
    <MemoryRouter>
      <Route path="/about" component={About}/>
      <Route path="/user" component={User}/>
      <Redirect exact from="/" to="about" />
    </MemoryRouter>
  )
};