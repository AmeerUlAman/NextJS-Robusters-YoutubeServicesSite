import React from 'react';
import Tier from './Tier';
import styles from './TierCard.module.css';
const Vidtier=()=>{
  return (
    <div id="vidtiers">
      <div className={styles.extmar}></div>
      <center><h1 className={styles.heading}>Tier Section</h1></center>
     <center><p>Every YouTube channel has unique requirements. That's why we offer three tiers of
     video quality to suit your specific needs and budget.</p></center>
      <Tier/>
    </div>
  )
}
 

export default Vidtier;
