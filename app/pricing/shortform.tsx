"use client";

import React, { useState } from 'react';
import styles from './card.module.css';

const Shortform = () => {
  // State to store the number of videos and total price
  const [numVideos, setNumVideos] = useState(5);
  const [price, setPrice] = useState(150); // Initial price for 5 videos

  // Price per video
  const pricePerVideo = 30;

  // Handler for video quantity change
  const handleNumVideosChange = (event) => {
    const value = event.target.value;
    if (value >= 5) {
      setNumVideos(Number(value));
      calculatePrice(Number(value));
    } else {
      setNumVideos('');
      setPrice(0);
    }
  };

  // Calculate total price based on number of videos
  const calculatePrice = (videos) => {
    setPrice(pricePerVideo * videos);
  };

  return (
    <div>
      <div className={styles.bg}>
      <div className={styles.nin}>
    <center> <h1 className={styles.title}>Short form</h1></center>   
        <form action="" method="post">
          <div className={styles.ffrex} style={{marginTop:'9%'}}>
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
          <div className={styles.war}><label htmlFor="">Minimum number of videos : 5</label></div>
          

        
        </form>
</div>
<div className={styles.pric}>
            <center> <p>Total Price: ${price}</p></center>
           
          </div>
        <center><button type="submit" className={styles.sub}>Place Order</button></center>
      </div>
    </div>
  );
};

export default Shortform;
