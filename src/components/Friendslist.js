import React, { useEffect } from 'react'

export default function FriendsList(props) {
    const { getFriends, friends } = props
    console.log(props)
    useEffect(() => {
        getFriends()
    }, [])

    return (
        <div>
            <h2>friend list</h2>
          {friends.map(friend => 
              <h2>{friend.name}</h2>
          )}  
        </div>
            
        
    )
}