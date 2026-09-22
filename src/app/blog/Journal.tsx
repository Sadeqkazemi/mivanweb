"use client";
import { useState } from "react";
import Link from "next/link";
import shared from "../home.module.css";
import styles from "./blog.module.css";
const posts = [
 { slug: "eating-in-a-new-city", cat: "Travel", title: "Eating well in a city you have never visited", excerpt: "Five ways Mivan helps you order with confidence abroad.", meta: "5 min read · June 2026" },
 { slug: "low-sodium-flavor", cat: "Nutrition", title: "Low-sodium does not mean low-flavor", excerpt: "How to keep meals exciting while protecting your heart.", meta: "4 min read · May 2026" },
 { slug: "stress-aware-picks", cat: "Product", title: "Introducing stress-aware recovery picks", excerpt: "Your Apple Watch now shapes what we recommend.", meta: "3 min read · May 2026" },
 { slug: "diabetes-dining-out", cat: "Nutrition", title: "Eating with diabetes when you dine out", excerpt: "A simple framework for safer restaurant choices.", meta: "6 min read · April 2026" },
 { slug: "3-million-meals", cat: "Research", title: "What 3 million matched meals taught us", excerpt: "Patterns in how people actually eat on the move.", meta: "7 min read · April 2026" },
 { slug: "smartwatch-recovery-loop", cat: "Travel", title: "Smartwatch and food: the recovery loop", excerpt: "Why your body signals belong on your plate.", meta: "4 min read · March 2026" },
 { slug: "protein-timing", cat: "Nutrition", title: "The protein timing myth, settled", excerpt: "When you eat protein matters less than you think.", meta: "5 min read · March 2026" },
 { slug: "menus-read-themselves", cat: "Product", title: "Menus that read themselves", excerpt: "Inside the scanner that turns photos into nutrition.", meta: "4 min read · February 2026" },
 { slug: "sleep-debt-appetite", cat: "Research", title: "How sleep debt reshapes appetite", excerpt: "", meta: "" },
 { slug: "three-time-zones", cat: "Travel", title: "A week of eating across three time zones", excerpt: "", meta: "" },
];
export function Journal() {
 const [topic, setTopic] = useState("All");
 const filtered = posts.filter(post => topic === "All" || post.cat === topic);
 return <>
  <div className={styles.filters} role="group" aria-label="Filter articles by category">{["All", "Nutrition", "Travel", "Product", "Research"].map(cat => <button type="button" key={cat} aria-pressed={topic === cat} onClick={() => setTopic(cat)} className={topic === cat ? styles.selected : ""}>{cat}</button>)}</div>
  <div aria-live="polite">
   {(topic === "All" || topic === "Research") && <Link href="/blog/stress-cortisol-cravings" className={styles.featured}>
    <div className={`${shared.stripe} ${styles.featuredImage}`}><span>featured article image</span></div>
    <div className={styles.featuredCopy}><p className={styles.category}>Research · Featured</p><h2>How stress quietly changes what your body needs</h2><p className={styles.summary}>We dug into the science of stress, cortisol and cravings — and what it means for the meals that actually help you recover.</p><p className={styles.meta}>8 min read · June 2026</p></div>
   </Link>}
   <div className={styles.grid}>{filtered.map(post => <Link className={styles.card} key={post.slug} href={`/blog/${post.slug}`}><article>
    <div className={`${shared.stripe} ${styles.image}`}><span>article image</span></div><div className={styles.copy}><p className={styles.category}>{post.cat}</p><h2>{post.title}</h2>{post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}{post.meta && <p className={styles.meta}>{post.meta}</p>}</div>
   </article></Link>)}</div>
  </div>
 </>;
}
