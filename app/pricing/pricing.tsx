import React from 'react';
import Longform from './longform';
import Shortform from './shortform';
import Monet from './monet';
import styles from './page.module.css';

 const Pricing =()=> {
  return ( <div  id='pricing'>  
       <center><h1  style={{color:'white',padding:"40px",fontSize:"67px",marginTop:"35px", textShadow:" 0 0 10px rgba(255, 0, 0, 0.8), 0 0 20px rgba(255, 0, 0, 0.6), 0 0 30px rgba(255, 0, 0, 0.4)"}}>Pricing</h1></center>
  <div className={styles.frex} >
    <Longform />
    <Shortform />
    <Monet />
  </div> </div>)
}

export default Pricing;