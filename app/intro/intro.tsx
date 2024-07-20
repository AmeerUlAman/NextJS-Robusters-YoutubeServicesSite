import React from 'react';
import styles from './intro.module.css';

const Intro = () => {
  const light=()=>{



  }

  return (
    <div className={styles.background}>
      <div className={styles.moon} id='moon'></div> 


      <div>
        <h1 className={styles.header}>An adobe to thy robust work</h1>
      </div>
      <div className={styles.sand0}></div>
      <div className={styles.sand1}></div>
      <div className={styles.sand2}></div>
    </div>
  )
}

export default Intro;
