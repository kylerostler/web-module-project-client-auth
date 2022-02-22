import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login'
import FriendsList from './components/Friendslist'
import AddFriend from './components/AddFriend'
import axiosWithAuth from './axios';


function App() {
  const { push } = useHistory()
  const [friends, setFriends] = useState([])
  const signIn = ({username, password}) => {
    axios.post('http://localhost:9000/api/login', { username, password })
      .then(res => {
        window.localStorage.setItem('token', res.data.token)
        push('/friends')
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
      <div className='App'>

        <header>
          <h2>Links</h2>
          <Link to="">---login---</Link>
          <Link to="friends">---friends---</Link>
          <Link to="friends/add">---add friends---</Link>
          <Link to="friends">---logout---</Link>
        </header>

        <Route exact path="/" >
          <Login signIn={signIn} />
        </Route>

        <Route exact path="/friends">
          <FriendsList getFriends={getFriends} friends={friends}/>
        </Route>

        <Route exact path="/friends/add">
          <AddFriend />
        </Route>

      </div>
    </Router>
  );
}

export default App;
