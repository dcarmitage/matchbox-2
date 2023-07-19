import React, { useState, useEffect } from 'react';
import ProfileForm from './components/ProfileForm';
import Match from './components/Match';
import Chat from './components/Chat';
import './styles.css';

function App() {
  const [profile, setProfile] = useState(null);
  const [match, setMatch] = useState(null);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    // TODO: Fetch profile data from server
  }, []);

  const handleProfileSubmit = (profileData) => {
    setProfile(profileData);
    // TODO: Send profile data to server
  };

  const handleMatchFound = (matchData) => {
    setMatch(matchData);
    // TODO: Start chat with matched user
  };

  const handleChatStart = (chatData) => {
    setChat(chatData);
    // TODO: Handle chat events
  };

  return (
    <div className="App">
      <ProfileForm onSubmit={handleProfileSubmit} />
      {match && <Match match={match} onMatchFound={handleMatchFound} />}
      {chat && <Chat chat={chat} onChatStart={handleChatStart} />}
    </div>
  );
}

export default App;