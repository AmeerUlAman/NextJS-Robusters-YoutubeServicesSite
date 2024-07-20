import React from 'react';
import styles from './intro.module.css';

const Intro = () => {
  const light=()=>{



  }

  return (
    <div className={styles.background}>
      <div className={styles.moon} id='moon'></div> 


      <div>
        <h1 className={styles.header}>AN ADOBE TO THY ROBUST WORK</h1><br />
    <center> <p  className={styles.text}>We build sustainable multi revenue YouTube brands
    </p></center>   
    <div  className={styles.frex}>    <center><button className={styles.sp}>SEE PLANS</button>
    <button className={styles.sp}>CONTACT US</button></center></div>

      </div>
      <div className={styles.sand0}></div>
      <div className={styles.sand1}></div>
      <div className={styles.sand2}></div>
    </div>
  )
}

export default Intro;
