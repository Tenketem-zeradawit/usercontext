
import React, { useContext } from 'react';
import { UserContext } from './App.jsx';
import './style.css';

function Childs() {
  const user = useContext(UserContext);

  return (
    <div className="boxs">
      <h1>Child Component</h1>
      <h2>{`bye ${user}`}</h2>
    </div>
  );
}

export default Childs;
