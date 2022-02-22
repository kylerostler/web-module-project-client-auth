import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login'
import FriendsList from './components/Friendslist'
import axiosWithAuth from './axios';

function App() {
  const [friends, setFriends] = useState([])

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

  const getFriends = () => {
    axiosWithAuth().get('http://localhost:9000/api/friends')
    .then(res => {
      console.log(res)
      setFriends(res.data)
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
      <Route path="/friends">
        <FriendsList getFriends={getFriends} friends={friends}/>
      </Route>
    </Router>
  );
}

export default App;
