'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import styles from './LiquidityHouse.module.scss';

const LiquidityHouse = () => {
  return (
    <div className={styles.lh}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0 }}
      >
        The
      </motion.h2>{' '}
      <Logo />{' '}
      <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          is
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          being
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          built.
        </motion.h2>
    </div>
  );
};

export default LiquidityHouse;
