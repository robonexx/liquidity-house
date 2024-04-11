import Image from 'next/image';
import styles from './page.module.scss';
import LiquidityHouse from '@/components/LiquidityHouse';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <LiquidityHouse />
      </section>
    </main>
  );
}
