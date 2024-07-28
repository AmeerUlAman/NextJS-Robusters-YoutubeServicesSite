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
    <div className={styles.card}>
      <div>
      <Image 
        height={1000} 
        width={1000} 
        quality={100} 
        src={image} 
        alt={image} 
        className={styles.images}
      />
      </div>
      <center><p className={styles.titles}>{title}</p></center>
   <center><p className={styles.paras}>{para}</p></center>
      
    </div>
  );
}

export default Cards;
