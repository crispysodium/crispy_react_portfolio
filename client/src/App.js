import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Content from './pages/Content';

function App() {
  return (
    <Router>
      <div id="home">
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Content} />
      </div>
    </Router>
  );
}

export default App;
