'use client';
import React from 'react';
import { motion } from 'framer-motion';
import LogoDesktop from './Logo-desktop';
import styles from './LiquidityHouse.module.scss';
import Logo2Desktop from './Logo2-desktop';

const LiquidityHouse2 = () => {
  return (
    <div className={styles.lh}>
      <>
        <Logo2Desktop />
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 2.5,
            ease: 'easeOut',
            type: 'spring',
            bounce: 0.25,
          }}
        >
          The
        </motion.h2>{' '}
        <LogoDesktop />{' '}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 3.6,
            ease: 'easeOut',
            type: 'spring',
            bounce: 0.25,
          }}
        >
          is
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 3.8,
            ease: 'easeOut',
            type: 'spring',
            bounce: 0.25,
          }}
        >
          being
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 4,
            ease: 'easeOut',
            type: 'spring',
            bounce: 0.25,
          }}
        >
          built.
        </motion.h2>
      </>
    </div>
  );
};

export default LiquidityHouse2;
