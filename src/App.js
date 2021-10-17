//Import react services
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Import components
import MainPage from './components/MainPage/Index';
import Error404 from './components/staff/Error404';
import HelpPage from './components/pages/Help';
import Checkout from './components/pages/Checkout';
import Selected from './components/pages/Selected';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Search from './components/pages/Search';

// Import styles
import './css/main.scss';

function App() {
  return (
      <Router>
        <div>
          <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/help" component = {HelpPage} />
              <Route path="/checkout" component = {Checkout} />
              <Route path="/selected" component={Selected} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/search" component={Search} />
              <Route path="/shop" exact component={MainPage} />
              <Route component={Error404} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
