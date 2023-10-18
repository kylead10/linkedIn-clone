import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Header />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
