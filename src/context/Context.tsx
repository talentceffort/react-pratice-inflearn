import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext('unknown')

export default function ContextApp() {
  const [name, setName] = useState('mike');
  return (
    <div> 
      <UserContext.Provider value={name}>
        <div>상단 메뉴</div>
        <Profile />
        <div>하단 메뉴</div>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
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

function Greeting() {
  return (
    <UserContext.Consumer>
      {username => <p>{`${username} 님 안녕하세요`}</p>}
    </UserContext.Consumer>
  )
}

function Greeting2() {
  const username = useContext(UserContext);
  return <p>{`${username}`}</p>
}

// 중간에 있는 Profile 컴포넌트가 리렌더링 되지 않아도 context 의 값은 올바르게 변경됨
// Greeting 보다 Gretting2 로 사용하는 것이 훨씬 좋음. consumer 는 일반적으로 사용되지 않는다.