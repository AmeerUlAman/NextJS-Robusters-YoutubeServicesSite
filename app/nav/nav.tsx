"use client";


import React, { useEffect, useState } from 'react';
import styles from './nav.module.css';

const Nav = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section, div[id]');
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
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
        <li className={`${styles.navItem} ${activeSection === 'hero' ? styles.active : ''}`}>
          <a href="#hero">Home</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'vidtiers' ? styles.active : ''}`}>
          <a href="#vidtiers">Tiers</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'services' ? styles.active : ''}`}>
          <a href="#services">Services</a>
        </li>
        <li className={`${styles.navItem} ${activeSection === 'pricing' ? styles.active : ''}`}>
          <a href="#pricing">Pricing</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
