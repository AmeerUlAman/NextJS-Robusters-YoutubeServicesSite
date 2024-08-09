import React from 'react';
import Longform from './longform';
import Shortform from './shortform';
import Monet from './monet';
import styles from './page.module.css';

 const Pricing =()=> {
  return ( <div  id='pricing'>  
       <center><h1  className={styles.heading}><span style={{backgroundColor:"red",padding:"7px",borderRadius:"14px"}}>Pricing</span></h1></center>
  <div className={styles.frex} >
    <Longform />
    <Shortform />
    <Monet />
  </div> </div>)
}

export default Pricing;