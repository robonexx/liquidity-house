import React, { useState, useEffect } from 'react';
import styles from './LiquidityHouse.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const Logo2Desktop = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3400);
    return () => clearTimeout(timeout);
  }, []); 
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles['logo2-desktop']}
          initial={{ x: 180, opacity: 0 }}
          animate={{ x: [180, 180, 0], opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 2,
            delay: 1,
          }}
        >
          <motion.svg
            width='52'
            height='49'
            viewBox='0 0 52 49'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 40,
              duration: 1,
              delay: 0,
            }}
          >
            <motion.path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M2.24822 14.8977C0.97597 17.8526 0.339844 21.0537 0.339844 24.5011C0.339844 27.9485 0.97597 31.1702 2.24822 34.1661C3.52048 37.1211 5.28521 39.7066 7.54243 41.9228C9.79966 44.139 12.4878 45.8832 15.6069 47.1554C18.767 48.3866 22.2349 49.0023 26.0106 49.0023C29.7453 49.0023 33.1927 48.3866 36.3528 47.1554C39.5129 45.8832 42.2216 44.139 44.4788 41.9228C46.7771 39.7066 48.5623 37.1211 49.8346 34.1661C51.1068 31.1702 51.743 27.9485 51.743 24.5011C51.743 21.0537 51.1068 17.8526 49.8346 14.8977C48.5623 11.9017 46.7771 9.29565 44.4788 7.07947C42.2216 4.86329 39.5129 3.13959 36.3528 1.90838C33.1927 0.636127 29.7453 0 26.0106 0C22.2349 0 18.767 0.636127 15.6069 1.90838C12.4878 3.13959 9.79966 4.86329 7.54243 7.07947C5.28521 9.29565 3.52048 11.9017 2.24822 14.8977Z'
              fill='url(#paint0_linear_437_10)'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <motion.path
              d='M36.0084 27.1683C36.0487 32.2363 31.8262 36.3785 26.5773 36.4202C21.3283 36.4619 17.0406 32.3873 17.0003 27.3194C16.9601 22.2514 20.7777 17.5 26.4275 11C31.2777 17.5 35.9682 22.1004 36.0084 27.1683Z'
              fill='#1B302F'
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 40,
                duration: 1,
                delay: 1,
              }}
            />
            <defs>
              <linearGradient
                id='paint0_linear_437_10'
                x1='0.339844'
                y1='24.5011'
                x2='51.743'
                y2='24.5011'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='#36F6AB' />
                <stop offset='0.49' stop-color='#36F6AB' />
                <stop offset='1' stop-color='#36F6AB' />
              </linearGradient>
            </defs>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Logo2Desktop;
