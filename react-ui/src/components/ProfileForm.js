import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = () => {
  const [interests, setInterests] = useState('');
  const [topics, setTopics] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const profile = {
      interests,
      topics
    };
    await axios.post('/api/profile', profile);
    setInterests('');
    setTopics('');
  };

  return (
    <div id="profile-form">
      <form onSubmit={handleSubmit}>
        <label>
          Interests:
          <input
            type="text"
            value={interests}
            onChange={e => setInterests(e.target.value)}
          />
        </label>
        <label>
          Topics to Discuss:
          <input
            type="text"
            value={topics}
            onChange={e => setTopics(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ProfileForm;