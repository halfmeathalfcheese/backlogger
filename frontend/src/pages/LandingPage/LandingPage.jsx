import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';

import '../Page.scss';
import './LandingPage.scss';
import { landingPageImage } from '../../utils/ImageLinks';
import SearchResultCard from "../../components/SearchPage/SearchResultCard";
import LoadingElement from '../../components/LoadingElement/LoadingElement';

const LandingPage = () => {
  const [popularGameData, setPopularGameData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const popularGames = [119133, 119171, 259338, 17000];
    const fetchData = async () => {
      const data = await Promise.all(popularGames.map(async (gameId) => {
        const response = await fetch(`http://localhost:3001/api/game/${gameId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        return response.json();
      }));
      setPopularGameData(data);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  if (isLoading) {
    return (
      <LoadingElement />
    );
  };

  return (
    <div>
        <Box 
          id="landing-website-description"
          sx={{
            backgroundImage: `url(${landingPageImage})`,
            backgroundSize: 'cover',
            backgroundPosition: '0 15%',
          }}
        >
          <Typography
          variant='h3'
            style={{
              color: 'white',
              fontWeight: 600,
              fontSize: '2.5em',
              textAlign: 'center',
              padding: '10% 0 10% 30%',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            backLogger
            <Typography
              variant='body2'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: 'orange'
              }}
            >
              Track all your games across all platforms in one place
            </Typography>
            <Typography
              variant='body2'
              style={{
                fontFamily: 'Montserrat, sans-serif',
                color: 'white',
                textAlign: 'left',
                padding: '0 0 0 30%'
              }}
            >
              <ul>
                <li>Search through a library of games powered by IGDB</li>
                <li>Track your game progress</li>
                <li>Find new games to play</li>
                <li>Never forget a game you've played again</li>
              </ul>
            </Typography>
          </Typography>
        </Box>
        <Box>
          <Typography
            style={{
              textAlign: 'center',
              padding: '2vh 0 2vh 0',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.5em',
              fontWeight: 600
            }}
          >
            Popular Games
          </Typography>
          <Box id='landing-popular-games'>
            {popularGameData.map((game, index) => (
              <SearchResultCard key={index} result={game} />
            ))}
          </Box>
        </Box>
    </div>
  );
}

export default LandingPage;