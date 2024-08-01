"use client";

import React, { useState, ChangeEvent } from 'react';
import styles from './card.module.css';

const Shortform: React.FC = () => {
  // State to store the number of videos and total price
  const [numVideos, setNumVideos] = useState<number>(5);
  const [price, setPrice] = useState<number>(150); // Initial price for 5 videos

  // Price per video
  const pricePerVideo = 30;

  // Handler for video quantity change
  const handleNumVideosChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 5) {
      setNumVideos(value);
      calculatePrice(value);
    } else {
      setNumVideos(0); // Update to use 0 instead of ''
      setPrice(0);
    }
  };

  // Calculate total price based on number of videos
  const calculatePrice = (videos: number) => {
    setPrice(pricePerVideo * videos);
  };

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.nin}>
          <center><h1 className={styles.title}>Short form</h1></center>   
          <form action="" method="post">
            <div className={styles.ffrex} style={{ marginTop: '9%' }}>
              <label htmlFor="numVideos">Number of Videos:</label>
              <input
                type="number"
                id="numVideos"
                min="5"
                value={numVideos || ''}
                onChange={handleNumVideosChange}
                className={styles.inp}
              />
            </div>
            <div className={styles.war}><label>Minimum number of videos: 5</label></div>
          </form>
        </div>
        <div className={styles.pric}>
          <center><p>Total Price: ${price}</p></center>
        </div>
        <center><button type="submit" className={styles.sub}>Place Order</button></center>
      </div>
    </div>
  );
};

export default Shortform;
