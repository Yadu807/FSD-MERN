import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AddBlog from './components/AddBlog';
import Navbar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/ab" element={<AddBlog />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
