import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/'>
            <Login />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
