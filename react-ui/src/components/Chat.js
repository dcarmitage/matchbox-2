import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  const socket = io.connect('http://localhost:5000');

  useEffect(() => {
    socket.on('chat-start', ({ message }) => {
      setChat([...chat, message]);
    });
  });

  const onTextChange = e => {
    setMessage(e.target.value);
  };

  const onMessageSubmit = e => {
    e.preventDefault();
    socket.emit('chat-start', { message });
    setMessage('');
  };

  return (
    <div id="chat-container">
      <h2>Chat</h2>
      <form onSubmit={onMessageSubmit}>
        <input
          name="message"
          onChange={e => onTextChange(e)}
          value={message}
          label="Message"
          placeholder="Type your message here..."
        />
        <button>Send</button>
      </form>
      <div>
        {chat.map((message, idx) => (
          <div key={idx}>{message}</div>
        ))}
      </div>
    </div>
  );
};

export default Chat;