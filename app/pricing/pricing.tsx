import React from 'react';
import Longform from './longform';
import Shortform from './shortform';
import Monet from './monet';
import styles from './page.module.css';

 const Pricing =()=> {
  return ( <div  id='pricing'>  
       <center><h1  style={{color:'black',padding:"40px",fontSize:"67px",marginTop:"35px"}}>Pricing</h1></center>
  <div className={styles.frex} >
    <Longform />
    <Shortform />
    <Monet />
  </div> </div>)
}

export default Pricing;