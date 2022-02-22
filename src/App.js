import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login'
import FriendsList from './components/Friendslist'

function App() {

  const signIn = ({username, password}) => {
    axios.post('http://localhost:9000/api/login', { username, password })
      .then(res => {
        window.localStorage.setItem('token', res.data.token)
        debugger
      })
      .catch(err => {
        debugger
      })
  }

  return (
    <Router>
      <Route path="/" >
        <Login signIn={signIn} />
      </Route>
      <Route path="/Friends">
        <FriendsList />
      </Route>
    </Router>
  );
}

export default App;
