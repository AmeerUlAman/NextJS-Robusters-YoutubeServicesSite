import React from 'react';
import Longform from './longform';
import Shortform from './shortform';
import Monet from './monet';
import styles from './page.module.css';

export default function main() {
  return (  <div className={styles.frex}>
    <Longform />
    <Shortform />
    <Monet />
  </div> )
}

