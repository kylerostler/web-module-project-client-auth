import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login'
import FriendsList from './components/Friendslist'
import AddFriend from './components/AddFriend'
import axiosWithAuth from './axios';
import Logout from './components/Logout';

function App() {
  const { push } = useHistory()
  const [friends, setFriends] = useState([])

  const signIn = ({username, password}) => {
    axiosWithAuth().post('http://localhost:9000/api/login', { username, password })
      .then(res => {
        window.localStorage.setItem('token', res.data.token)
      })
      .catch(err => {
        debugger
      })
  }

  const getFriends = () => {
    axiosWithAuth().get('http://localhost:9000/api/friends')
    .then(res => {
      setFriends(res.data)
    })
    .catch(err => {
      debugger
    })
  }

  const postFriend = ({ username, age, email }) => {
    axiosWithAuth().post('http://localhost:9000/api/friends', { username, email, age})
    .then(res => {
      setFriends(...friends, res.data)
    })
    .catch(err => {
      debugger
    })
  }



  return (
    <Router>
      <div className='App'>
        <h1>
        <Link to="/">---HOME---</Link>
        </h1>
        <Route exact path="/" >
          <Login signIn={signIn} />
        </Route>

        <Route exact path="/friends">
        <header>
          <h2>Links</h2>
          <Link to="">---home---</Link>
          <Link to="friends/add">---add friends---</Link>
          <Link to="/logout">---logout</Link>
        </header>
          <FriendsList getFriends={getFriends} friends={friends}/>
        </Route>

        <Route exact path="/friends/add">
        <header>
          <h2>Links</h2>
          <Link to="">---home---</Link>
          <Link to="/logout">---logout</Link>
        </header>
          <AddFriend postFriend={postFriend} friends={friends}/>
        </Route>

        <Route exact path="/logout">
          <Logout />
        </Route>

      </div>
    </Router>
  );
}

export default App;
