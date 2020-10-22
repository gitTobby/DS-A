import React from 'react';
import './css/common.css';
// import { Router } from "react-router-dom";
// import ChapterList from "./ChapterList";
// import ChapterContent from "./ChapterContent";

import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import Chapter1 from "./Result/Chapter1";



function App() {

   
   
    return (
      <div className="wrap">
        <Router>
          {/* <nav>
            <ChapterList />
          </nav> */}
          {/* <section>
            <ChapterContent />
          </section> */}
          <nav>
            <Link to="/Chapter1">
              <button>1. 빅오표기볍</button>
            </Link>
          </nav>
          <section>
            <Switch>
                <Route path="/Chapter1" component={Chapter1}></Route>
            </Switch>
          </section>
        </Router>
      </div>
    );
  
}

export default App;