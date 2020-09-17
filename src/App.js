import React from 'react';
import Home from './Components/Templet/Home/Home'
import Nav from './Components/Molicules/Nav/Nav'
import Footer from './Components/Molicules/Footer/Footer'
import Blog from './Components/Templet/Blog/Blog'
import Teamm from './Components/Templet/Teamm/Teamm'


import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="">


      <Router>

        <Nav />
        
        <Switch>
          <Route path="/" exact>

            <Home />
          </Route>

          <Route path="/blog" exact>
            <Blog />
          </Route>

          <Route path="/team" exact>
            <Teamm />
          </Route>
        </Switch>
        <Footer />
      </Router>



    </div>
  );
}

export default App;
