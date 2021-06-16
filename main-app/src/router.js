import { HashRouter as Router, Route } from 'react-router-dom';
import Page from './page';
import MicroAppWrapper from './microAppWrapper';
import MicroReact from './pages/microReact';
import MicroVue from './pages/microVue';

export default function RouterConfig() {
  return (
    <Router>
      <Route path="/microReact" component={MicroReact}/>
      <Route path="/microVue" component={MicroVue}/>
      <Route path="/" exact component={Page}/>
    </Router>
  )
};