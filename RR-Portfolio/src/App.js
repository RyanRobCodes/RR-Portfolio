import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from './components/Navigation.js'
import About from './components/About';
import Contact from './components/Contact.js';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/' exact component={About} />
        <Route path='/Contact' component={Contact} />
        <Route path='/Resume' component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
