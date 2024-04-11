import Image from "next/image";
import styles from "./page.module.css";
import LiquidityHouse from "@/components/LiquidityHouse";

export default function Home() {
  return (
    <main className={styles.main}>
    <LiquidityHouse />
    </main>
  );
}
