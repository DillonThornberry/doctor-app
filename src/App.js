import './App.css';
import React from 'react';
import Main from './components/Main'
import Signin from './components/Signin'
import Patient from './components/Patient'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import ReactDOM from "react-dom/client";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/patient'element={<Patient/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;

