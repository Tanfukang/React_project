import React from 'react';
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Home from './pages/index/Home'
import './App.css';

function App(props) {
  return (
    <div className="App">
      {/* <Login>{...props}</Login> */}
      {/* <Register></Register> */}
      <Home {...props}></Home>
    </div>
  );
}

export default App;
