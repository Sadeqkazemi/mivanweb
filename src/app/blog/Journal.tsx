"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./blog.module.css";
import { blogPosts } from "./posts";

const topics = ["All", "Nutrition", "Travel", "Product", "Research"];

export function Journal() {
  const [topic, setTopic] = useState("All");
  const posts = blogPosts.filter(post => post.slug !== "stress-cortisol-cravings");
  const filtered = posts.filter(post => topic === "All" || post.cat === topic);
  const showFeatured = topic === "All" || topic === "Research";

  return (
    <section className={styles.journal} aria-labelledby="latest-title">
      <div className={styles.journalBar}>
        <div><p className={styles.kicker}>LATEST THINKING</p><h2 id="latest-title">Stories worth taking with you.</h2></div>
        <p>{showFeatured ? filtered.length + 1 : filtered.length} articles</p>
      </div>

      <div className={styles.filters} role="group" aria-label="Filter articles by category">
        {topics.map(cat => <button type="button" key={cat} aria-pressed={topic === cat} onClick={() => setTopic(cat)} className={topic === cat ? styles.selected : ""}>{cat}</button>)}
      </div>

      <div aria-live="polite">
        {showFeatured && <Link href="/blog/stress-cortisol-cravings" className={styles.featured}>
          <div className={styles.featuredImage}><Image src="/images/blog-stress-cortisol-cravings.webp" alt="A recovery meal beside a smartwatch showing an elevated health signal" fill sizes="(max-width: 760px) 100vw, 58vw" priority /></div>
          <article className={styles.featuredCopy}><div className={styles.featuredTop}><span>FEATURED STORY</span><b>01</b></div><p className={styles.category}>RESEARCH</p><h3>How stress quietly changes what your body needs</h3><p className={styles.summary}>We dug into the science of stress, cortisol and cravings, and what it means for meals that actually help you recover.</p><div className={styles.articleMeta}><span>8 min read</span><span>June 2026</span></div></article>
        </Link>}

        <div className={styles.grid}>
          {filtered.map((post, index) => <Link className={styles.card} key={post.slug} href={`/blog/${post.slug}`}>
            <article>
              <div className={styles.image}><Image src={post.image} alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw" /></div>
              <div className={styles.copy}><div className={styles.cardTop}><p className={styles.category}>{post.cat}</p><span>{String(index + 2).padStart(2, "0")}</span></div><h3>{post.title}</h3><p className={styles.excerpt}>{post.excerpt}</p><p className={styles.meta}>{post.meta}</p></div>
            </article>
          </Link>)}
        </div>
      </div>
    </section>
  );
}
