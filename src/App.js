import React, { useState, useEffect } from 'react';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    })
  }, [])


  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, [])



  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
      <div className="header">
        <h1>Chat App</h1>
        <h2>Welcome {username}</h2>
      </div>

      <div className="messages-wrapper">
        <FlipMove>
          {
            messages.map(({ id, message }) => (
              <Message key={id} username={username} message={message} />
            ))
          }
        </FlipMove>

        <form className="app__form">
          <input className="app__input" value={input} onChange={e => setInput(e.target.value)} placeholder="Enter a message..." maxLength="80" />
          <button className="app__button" disabled={!input} type="submit" onClick={sendMessage}>Send</button>
        </form>

      </div>
    </div>
  );
}

export default App;
