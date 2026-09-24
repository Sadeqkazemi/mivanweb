"use client";
import { useState, type FormEvent } from "react";
import Link from "next/link";
import shared from "../home.module.css";
import styles from "./contact.module.css";
const topics = [
  { name: "Support", email: "info@mivanfood.com", description: "Account, app and billing questions." },
  { name: "Health & allergens", email: "info@mivanfood.com", description: "Health signals, dietary preferences and allergen questions." },
  { name: "Restaurant partner", email: "info@mivanfood.com", description: "Restaurant partnerships and menu questions." },
  { name: "Press", email: "info@mivanfood.com", description: "Media enquiries and press requests." },
  { name: "Something else", email: "info@mivanfood.com", description: "General questions, feedback and ideas." },
];
export function ContactForm() {
  const [selected, setSelected] = useState(0);
  const [draft, setDraft] = useState("");
  const topic = topics[selected];
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    if (!name || !message) return;
    setDraft(`mailto:${topic.email}?subject=${encodeURIComponent(`${topic.name} — ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`);
  }
  return <section className={styles.formCard} aria-labelledby="message-title"><h2 id="message-title">Send a message</h2><p className={styles.subtitle}>Pick a topic so it reaches the right team first time.</p>
    <form onSubmit={submit} onChange={() => setDraft("")}>
      <fieldset className={styles.topics}><legend>Topic</legend><div>{topics.map((item,i) => <label key={item.name} className={selected === i ? styles.selected : undefined}><input type="radio" name="topic" value={item.name} checked={selected === i} onChange={() => {setSelected(i);setDraft("");}} /><span>{item.name}</span></label>)}</div></fieldset>
      <p className={styles.routing} aria-live="polite">Goes to <a href={`mailto:${topic.email}`}>{topic.email}</a> · {topic.description}</p>
      <div className={styles.fields}><label>Full name<input name="name" autoComplete="name" required maxLength={120} pattern=".*\S.*" /></label><label>Email<input name="email" type="email" autoComplete="email" placeholder="you@gmail.com" required maxLength={254} /></label></div>
      <label className={styles.message}>Message<textarea name="message" placeholder="Tell us a bit more..." required maxLength={5000} rows={6} /></label>
      <div className={styles.submit}><button type="submit" className={`${shared.button} ${shared.primary}`}>Send message</button><p>By sending you agree to our <Link href="/privacy">Privacy Policy</Link>.</p></div>
      {draft && <div className={styles.draft} role="status"><p>Your message is ready. Open your email app to review and send it. Nothing has been sent yet.</p><a href={draft}>Open email app</a></div>}
    </form>
  </section>;
}
