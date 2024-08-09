"use client";

import React, { useEffect, useState } from 'react';
import styles from './nav.module.css';
import Image from 'next/image';
const Nav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section, div[id]');
    const options = {
      threshold: [0.3, 0.6, 0.9],
    };

    let debounceTimer: number;

    const observer = new IntersectionObserver((entries) => {
      clearTimeout(debounceTimer);
      debounceTimer = window.setTimeout(() => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, 50);
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
      <li className={`${styles.navItem} ${activeSection === 'her' ? styles.active : ''}`} id='ima'>
          <a href="#her"><Image 
          width={80}
          height={10}
          src={'/file.png'}
          alt='LOG'
          quality={100}
          className={styles.img}
          /></a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'hero' ? styles.active : ''}`}>
          <a href="#hero">Home</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'vidtiers' ? styles.active : ''}`}>
          <a href="#vidtiers">Videos</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'services' ? styles.active : ''}`}>
          <a href="#services">Services</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'wwwu' ? styles.active : ''}`}>
          <a href="#wwwu">Why Us</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'pricing' ? styles.active : ''}`}>
          <a href="#pricing">Pricing</a>
        </li>    
        <li className={`${styles.navItem} ${activeSection === 'faq' ? styles.active : ''}`}>
          <a href="#faq">FAQ</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
