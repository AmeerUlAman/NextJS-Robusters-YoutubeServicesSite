"use client";

import React, { useState, ChangeEvent } from 'react';
import styles from './card.module.css';

type Quality = 'basic' | 'standard' | 'premium';

const Longform: React.FC = () => {
  // State to store the number of videos, video quality, and total price
  const [numVideos, setNumVideos] = useState<number>(1);
  const [quality, setQuality] = useState<Quality>('basic');
  const [price, setPrice] = useState<number>(90); // Initial price for basic quality

  // Pricing for different qualities
  const pricing: Record<Quality, number> = {
    basic: 90,
    standard: 150,
    premium: 300,
  };

  // Handler for video quantity change
  const handleNumVideosChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value >= 1 && value <= 50) {
      setNumVideos(value);
      calculatePrice(value, quality);
    } else {
      setNumVideos(0); // Update to use 0 instead of ''
      setPrice(0);
    }
  };

  // Handler for quality selection change
  const handleQualityChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedQuality = event.target.value as Quality;
    setQuality(selectedQuality);
    calculatePrice(numVideos, selectedQuality);
  };

  // Calculate total price based on number of videos and selected quality
  const calculatePrice = (videos: number, selectedQuality: Quality) => {
    if (videos >= 1 && videos <= 50) {
      setPrice(pricing[selectedQuality] * videos);
    } else {
      setPrice(0);
    }
  };

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.nin}>
          <center><h1 className={styles.title}>Long form</h1></center>    
          <form action="" method="post">
            <div className={styles.ffrex} style={{ marginTop: '9%' }}>
              <label htmlFor="numVideos">Number of Videos:</label>
              <input
                type="number"
                id="numVideos"
                min="1"
                max="50"
                value={numVideos || ''}
                onChange={handleNumVideosChange}
                className={styles.inp}
              />
            </div>
            <div className={styles.war}><label> enter number of videos from 1 - 50 only *</label></div>
            <div className={styles.ffrex}>
              <label>Quality:</label>
              <div style={{ padding: '5px' }}>
                <input
                  type="radio"
                  name="quality"
                  id="basic"
                  value="basic"
                  checked={quality === 'basic'}
                  onChange={handleQualityChange}
                />
                <label htmlFor="basic" className={styles.rb}>Basic ($90)</label>
              </div>
              <div style={{ padding: '5px' }}>
                <input
                  type="radio"
                  name="quality"
                  id="standard"
                  value="standard"
                  checked={quality === 'standard'}
                  onChange={handleQualityChange}
                />
                <label htmlFor="standard" className={styles.rb}>Standard ($150)</label>
              </div>
              <div style={{ padding: '5px' }}>
                <input
                  type="radio"
                  name="quality"
                  id="premium"
                  value="premium"
                  checked={quality === 'premium'}
                  onChange={handleQualityChange}
                />
                <label htmlFor="premium" className={styles.rb}>Premium ($300)</label>
              </div>
            </div>
            <div className={styles.ffrex} style={{ fontSize: 'medium' }}>
              <label>Video Duration: 8 - 10 minutes</label>
            </div>
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

export default Longform;
