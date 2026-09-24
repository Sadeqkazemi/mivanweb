import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PublicNav } from "@/components/PublicNav";
import { Footer } from "@/components/Footer";
import { blogPosts, getBlogPost, type BlogPost } from "../posts";
import styles from "./post.module.css";

const storyByCategory: Record<BlogPost["cat"], {
  author: string;
  role: string;
  opening: string;
  sections: { title: string; paragraphs: string[] }[];
  quote: string;
  takeaways: string[];
}> = {
  Research: {
    author: "Dr. Lena Faris",
    role: "Nutrition Science",
    opening: "Food never reaches the body in isolation. Sleep, stress, movement and place change what feels satisfying and what supports recovery next.",
    sections: [
      { title: "Look beyond a single meal", paragraphs: ["The useful signal is rarely one ingredient or one perfect choice. It is the pattern around the meal: what happened before it, how the body responded, and whether energy stayed steady afterward.", "When we compare those moments over time, small relationships become clearer. They help turn broad advice into guidance that fits a real day."] },
      { title: "Make the signal useful", paragraphs: ["Good guidance should reduce decision fatigue. It should explain why a choice fits, leave room for preference and make uncertainty visible instead of hiding it."] },
    ],
    quote: "The best recommendation is the one a person can understand, trust and use in the moment.",
    takeaways: ["Patterns matter more than isolated numbers", "Context changes what the body needs", "Clear guidance beats more data"],
  },
  Nutrition: {
    author: "Maya Rahimi",
    role: "Registered Dietitian",
    opening: "Nutrition becomes easier when the goal is a workable pattern instead of a perfect plate. Flavor, timing and portions can all adapt without losing the pleasure of eating.",
    sections: [
      { title: "Build from what already works", paragraphs: ["Start with familiar food and improve the balance around it. Protein, fibre and color make a strong base, while acidity, herbs and texture keep the result enjoyable.", "A useful adjustment should feel small enough to repeat. The best plan survives busy days, restaurant menus and travel."] },
      { title: "Keep the choice flexible", paragraphs: ["Needs change across the day. Hunger, medication, activity and sleep can all shift the right portion or pairing, so rigid rules often create more noise than help."] },
    ],
    quote: "Healthy food only becomes useful when it still feels like food you want to eat.",
    takeaways: ["Improve familiar meals first", "Use flavor as part of the solution", "Choose patterns you can repeat"],
  },
  Travel: {
    author: "Nadia Chen",
    role: "Travel & Food Editor",
    opening: "A new city changes the menu, the schedule and the cues you normally rely on. A little structure makes room for discovery without turning every meal into a calculation.",
    sections: [
      { title: "Anchor the day", paragraphs: ["Keep one or two parts of your routine familiar: breakfast timing, hydration or a reliable snack. Those anchors make the rest of the day easier to explore.", "Read menus for cooking method and balance before focusing on a single ingredient. Grilled, roasted, broth-based and vegetable-forward choices often give you a useful starting point."] },
      { title: "Leave room for the place", paragraphs: ["Local food is part of travel. Share richer dishes, add something fresh and let the next meal rebalance the day rather than treating one choice as a failure."] },
    ],
    quote: "Confidence comes from a few reliable cues, not from knowing every dish before you arrive.",
    takeaways: ["Keep one daily anchor", "Read preparation before ingredients", "Balance the day, not every bite"],
  },
  Product: {
    author: "Arman Valeh",
    role: "Mivan Product",
    opening: "A personal food product should make a complicated moment feel calm. That means combining signals carefully and showing only the part that helps someone choose.",
    sections: [
      { title: "From signal to decision", paragraphs: ["A menu photo, a saved preference and an optional wearable signal all describe different parts of the same moment. The product connects them without asking the user to interpret raw data.", "The result is a short ranking with a clear reason. People can still explore the menu, but they begin with a useful point of view."] },
      { title: "Design for trust", paragraphs: ["Personalization works only when people stay in control. Every signal should be optional, understandable and easy to change as needs evolve."] },
    ],
    quote: "The interface should carry the complexity so the person can focus on the choice.",
    takeaways: ["Explain every recommendation", "Keep health context optional", "Design for changing preferences"],
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const story = storyByCategory[post.cat];
  const articleNumber = String(blogPosts.findIndex(item => item.slug === post.slug) + 1).padStart(2, "0");
  const related = blogPosts.filter(item => item.slug !== post.slug && item.cat === post.cat).slice(0, 3);
  const fallbackRelated = related.length >= 3 ? related : [...related, ...blogPosts.filter(item => item.slug !== post.slug && item.cat !== post.cat)].slice(0, 3);

  return <>
    <PublicNav />
    <main className={styles.page}>
      <article className={styles.article}>
        <header className={styles.hero}>
          <Link href="/blog" className={styles.back}>Back to the journal</Link>
          <div className={styles.heroMeta}><span>{post.cat}</span><i /> <span>{post.meta}</span></div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className={styles.byline}>
            <span className={styles.authorMark}>{story.author.charAt(0)}</span>
            <span><strong>{story.author}</strong><small>{story.role}</small></span>
          </div>
        </header>

        <figure className={styles.cover}>
          <Image src={post.image} alt="" fill sizes="(max-width: 760px) 100vw, 1180px" priority />
          <figcaption><span>{articleNumber}</span><p>{post.cat} · Mivan Journal</p></figcaption>
        </figure>

        <div className={styles.storyGrid}>
          <aside className={styles.storyRail} aria-label="Article information">
            <p>READING NOTE</p>
            <strong>{post.meta.split(" · ")[0]}</strong>
            <span>Clear guidance for real food decisions.</span>
            <Link href="/blog">All stories</Link>
          </aside>

          <div className={styles.storyBody}>
            <p className={styles.lead}>{story.opening}</p>
            {story.sections.map(section => <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </section>)}

            <blockquote><span>“</span>{story.quote}</blockquote>

            <section className={styles.takeaways} aria-labelledby="takeaways-title">
              <p>KEEP WITH YOU</p>
              <h2 id="takeaways-title">Three useful ideas</h2>
              <ol>{story.takeaways.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
            </section>
          </div>
        </div>
      </article>

      <section className={styles.related} aria-labelledby="related-title">
        <div className={styles.relatedHeading}><div><p>KEEP READING</p><h2 id="related-title">More from the journal</h2></div><Link href="/blog">View all</Link></div>
        <div className={styles.relatedRail}>{fallbackRelated.map(item => <Link href={`/blog/${item.slug}`} key={item.slug} className={styles.relatedCard}>
          <div className={styles.relatedImage}><Image src={item.image} alt="" fill sizes="(max-width: 760px) 78vw, 360px" /></div>
          <div><p>{item.cat}</p><h3>{item.title}</h3><span>{item.meta}</span></div>
        </Link>)}</div>
      </section>
    </main>
    <Footer variant="app" />
  </>;
}
