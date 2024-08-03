import React from 'react';
import styles from './cards.module.css';
import Image from 'next/image';

interface CardData {
  image: string;
  title: string;
  para: string;
}

const Cards: React.FC<CardData> = ({ image, title, para }) => {
  return (
    <div className={styles['card-container']}>
      <div className={styles.card}>
        <div className={styles.imag}>
          <Image 
            height={150} 
            width={150} 
            quality={100} 
            src={image} 
            alt={image} 
            className={styles.images}
          />
        </div>
        <center><p className={styles.titles}>{title}</p></center>
        <center><p className={styles.paras}>{para}</p></center>
      </div>
    </div>
  );
}

export default Cards;
