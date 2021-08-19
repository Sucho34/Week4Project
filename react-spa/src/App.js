import './App.css';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './hooks/Counter';
import NavbarLink from './components/NavbarLink';
import List from './components/List';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Resume } from './pages/Resume';


function App() {
  return (
    <div>
      <Router>
        <NavbarLink/>
      
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/resume" component={Resume}/>
          </Switch>
          </div>
      </Router>

      <Counter/>
      <List/>
  </div>
  );
}

export default App;
