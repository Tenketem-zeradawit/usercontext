
import React, { createContext, useState } from 'react';
import Childs from './Childs.jsx';
import './style.css';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState('Bro Code');

  return (
    <div className="boxs">
      <h1>App component</h1>
      <h2>{`hello ${user}`}</h2>

     
      <UserContext.Provider value={user}>
        <Childs />
      </UserContext.Provider>
    </div>
  );
}

export default App;

