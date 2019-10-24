import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './components/HomePage';

import './app.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Route exact path="/" component={HomePage} />
      </div>
    </Router>
  );
}

export default App;
