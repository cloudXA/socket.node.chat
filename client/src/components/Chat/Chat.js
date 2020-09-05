import React, { useState, useEffect } from 'react';
import querystring from 'query-string';
import io from 'socket.io-client';
import './Chat.css'

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  

  // 相当于componentDidMount 和 componentDidUpdate 
  useEffect (() => {
    // 解析url为： ?name=1&room=1 为 {name: 1, room: 1}
    const {name, room} = querystring.parse(location.search);

    socket = io();

    setName(name);
    setRoom(room);
    
  });

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click me 
      </button>
    </div>
  )
}

export default Chat
