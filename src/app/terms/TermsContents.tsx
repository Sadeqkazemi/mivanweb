"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import styles from "./terms.module.css";

function subscribe(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  return () => window.removeEventListener("hashchange", onChange);
}

export function TermsContents({ items }: { items: { id: string; label: string }[] }) {
  const active = useSyncExternalStore(subscribe, () => window.location.hash.slice(1), () => "");
  return <nav className={styles.contents} aria-label="Terms contents">
    <h2>Contents</h2>
    <ol>{items.map(({ id, label }, i) => <li key={id}>
      <a href={`#${id}`} className={active === id ? styles.highlight : undefined} aria-current={active === id ? "location" : undefined}><span>{i + 1}</span>{label}</a>
    </li>)}</ol>
    <Link className={styles.privacyLink} href="/privacy">Privacy Policy →</Link>
  </nav>;
}
