import Link from "next/link";
import styles from "@/app/home.module.css";
export function NavAuthActions() {
  return <div className={styles.authActions}><Link href="/login" className={`${styles.button} ${styles.outline}`}>Sign in</Link><Link href="/login" className={`${styles.button} ${styles.primary}`}>Get started</Link></div>;
}
