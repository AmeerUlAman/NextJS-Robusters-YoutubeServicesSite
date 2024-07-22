import React from 'react';
import styles from './intro3.module.css';

const Intro3 = () => {
  return (
    <div className={styles.background}>
      <div className={styles.overlay}></div>
      <div className={styles.text}>
        <h1>AN ADOBE TO THY ROBUST WORK</h1>
        <p>We build sustainable multi revenue YouTube brands</p>
        <div className={styles.centbut}>
    <button className={styles.butsty}>SEE PLANS</button>
    <button  className={styles.butsty}>CONTACT US</button>
 </div>
      </div>
    </div>
  );
}

export default Intro3;
