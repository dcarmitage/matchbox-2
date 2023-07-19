import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Match = () => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    const findMatch = async () => {
      try {
        const response = await axios.get('/find_match');
        if (response.data.match_found) {
          setMatch(response.data.match);
        }
      } catch (error) {
        console.error('Error finding match:', error);
      }
    };

    findMatch();
  }, []);

  return (
    <div id="match-container">
      {match ? (
        <div>
          <h2>Match Found!</h2>
          <p>{match.name}</p>
          <p>{match.interests.join(', ')}</p>
        </div>
      ) : (
        <p>Searching for a match...</p>
      )}
    </div>
  );
};

export default Match;