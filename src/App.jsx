import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
