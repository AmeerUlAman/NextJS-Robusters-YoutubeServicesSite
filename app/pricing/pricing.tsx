import React from 'react';
import Longform from './longform';
import Shortform from './shortform';
import Monet from './monet';
import styles from './page.module.css';

 const Pricing =()=> {
  return ( <> 
       <center><h1 style={{color:'white',fontSize:"67px",marginTop:"35px"}}>Pricing</h1></center>
  <div className={styles.frex} id='pricing'>
    <Longform />
    <Shortform />
    <Monet />
  </div> </>)
}

export default Pricing;