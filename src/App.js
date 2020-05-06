import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../src/pages/Home";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        {/* <Wrapper> */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
        {/* </Wrapper> */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
