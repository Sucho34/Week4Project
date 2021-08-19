import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarLink from './components/NavbarLink';
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

  </div>
  );
}

export default App;
