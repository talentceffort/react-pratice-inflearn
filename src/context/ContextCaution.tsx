import React, { useContext, useState, createContext } from 'react';

const UserContext = createContext({ username: 'unknown', age: 0 })

export default function ContextCaution() {
  console.log('Main Render')
  // const [username, setUsername] = useState('mike')
  // const [age, setAge] = useState(0);
  const [user, setUser]  = useState({ username: 'mike', age: 0})
  const [count, setCount] = useState(0);

  return (
    <div> 
      <UserContext.Provider value={user}>
        <Profile />
        <button onClick={() => setCount(count + 1)}>증가</button>
      </UserContext.Provider>
    </div>
  )
}

const Profile = React.memo(function() {
  console.log('Profile Render')
  return (
    <div>
      <Greeting2 />
    </div>
  )
}); 

function Greeting2() {
  console.log('Greeting Render')
  const { username } = useContext(UserContext);
  return <p>{`${username}`}</p>
}