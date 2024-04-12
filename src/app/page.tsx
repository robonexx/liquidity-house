'use client';
import LiquidityHouse from '@/components/LiquidityHouse';
import styles from './page.module.scss';
import LiquidityHouse2 from '@/components/LiquidityHouse2';
import useMediaQuery from '@/utils/useMediaQuery';

export default function Home() {
  const { isDesktop } = useMediaQuery();
  return (
    <main className={styles.main}>
      <section>{isDesktop ? <LiquidityHouse2 /> : <LiquidityHouse />}</section>
    </main>
  );
}
