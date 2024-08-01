import React from 'react';
import Tier from './Tier';
import styles from './TierCard.module.css';
const Vidtier=()=>{
  return (
    <div id="vidtiers">
      <div className={styles.extmar}></div>
      <center><h1 style={{color:'white',fontSize:"67px",  textShadow: '0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)' }}>Video Tier&#39;s</h1></center>
      <Tier/>
    </div>
  )
}
 

export default Vidtier;
