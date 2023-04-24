import './App.css';
import React from 'react';
import Main from './components/Main'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <div className="App">
          <Route path='/' component={Main}/>
        </div>
      </Routes>
    </Router>
  );
}

export default App;

