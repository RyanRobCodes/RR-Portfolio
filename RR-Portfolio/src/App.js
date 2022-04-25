//import './App.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation'
import Page from './components/Page';
//import Resume from './components/Resume';

function App() {
  const [pages] = useState([
    {
      name: 'about'
    },
    {
      name: 'portfolio'
    },
    {
      name: 'contact'
    },
    {
      name: 'resume'
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);


  return (
    <div>
      <Header>
        <Navigation 
        pages={pages}
        setCurrentPage= {setCurrentPage}
        currentPage= {currentPage}
        >
        </Navigation>
      </Header>
      <main >
        <Page currentPage={currentPage}>
        </Page>
        <Footer />
      </main>


    </div>
    // <Router>
    //   <Navigation />
    //   <Switch>
    //     <Route path='/' exact component={About} />
    //     <Route path='/Contact' component={Contact} />
    //     <Route path='/Portfolio' component={Portfolio} />
    //     <Route path='/Resume' component={Resume} />
    //   </Switch>
    // </Router>

  );
}

export default App;
