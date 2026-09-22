"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./faq.module.css";
const groups = [
  { title: "Getting started", items: [
    { q: "Is Mivan free?", a: "Yes. The Free plan gives you a full taste and health profile plus daily recommendations at home, with no card required. Paid plans add menu scanning abroad, live smartwatch adaptation and unlimited saved places." },
    { q: "Which phones are supported?", a: "Mivan runs on the latest iOS and Android — any phone from the last few years works well." },
    { q: "How long does setup take?", a: "About two minutes: a short taste and health quiz, then you’re ready for your first recommendation." },
    { q: "Does Mivan work offline?", a: "An internet connection is needed for menu scanning and new recommendations. Connect to the internet to keep your profile and recommendations up to date." },
  ]},
  { title: "Health & data", items: [
    { q: "Is my health data safe?", a: "Your health data is encrypted in transit and at rest, and we never sell it. You can export or delete it from Settings. See our Privacy Policy for details." },
    { q: "Which conditions can Mivan handle?", a: "Your profile can include dietary preferences such as low-sodium or Mediterranean diets, diabetes-related needs, and common allergies. Recommendations are informational; always confirm allergens with the restaurant." },
    { q: "Which smartwatches work?", a: "Apple Watch, Wear OS, Fitbit and Garmin are supported. Manage your connections in Settings. Connecting a smartwatch is optional." },
    { q: "Is Mivan medical advice?", a: "No. Mivan is a wellness product, not a medical device. Recommendations and allergen flags may be incomplete. Confirm allergens directly with the restaurant and consult a qualified professional about medical conditions or treatment." },
  ]},
  { title: "Using the app", items: [
    { q: "How does menu scanning work?", a: "Take a clear photo of a restaurant menu. Mivan reads the dishes and compares them with your taste, dietary preferences and allergy profile to suggest suitable options." },
    { q: "What does the match score mean?", a: "The match score reflects how closely a dish fits your taste and dietary profile. It is a recommendation, not a guarantee of nutritional accuracy or allergen safety." },
    { q: "Can I turn the AI features off?", a: "Yes. You can switch individual AI features off in Settings without losing your account. You can also disconnect your smartwatch to stop new health readings." },
  ]},
  { title: "Billing", items: [
    { q: "Can I cancel anytime?", a: "Yes. Cancel from Settings to stop the next renewal. You keep access until the end of the period you have already paid for." },
    { q: "Do you offer team plans?", a: "Yes — the Team plan supports up to 10 members with trip- and expense-friendly billing. See Pricing for the available plans." },
    { q: "How do refunds work?", a: "For purchases through the App Store or Google Play, that store’s refund rules apply. For other billing questions, contact help@mivan.ai." },
  ]},
  { title: "Restaurants", items: [
    { q: "How do restaurants join?", a: "Contact partners@mivan.ai or choose Restaurant partner on our contact form. Our team can help you with the next steps and menu information." },
    { q: "Who keeps menu data accurate?", a: "Restaurant partners are responsible for the accuracy of the menus, ingredient details and allergen information they publish. Always confirm important dietary requirements directly with the restaurant." },
  ]},
];
const questions = groups.flatMap(group => group.items.map(item => ({...item, topic: group.title})));
export function HelpCentre() {
  const [topic, setTopic] = useState("All");
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState<string | null>(questions[0].q);
  const query = search.trim().toLowerCase();
  const matching = questions.filter(item => `${item.q} ${item.a} ${item.topic}`.toLowerCase().includes(query));
  const visible = matching.filter(item => topic === "All" || item.topic === topic);
  return <>
    <div className={styles.heading}><div><p className={styles.eyebrow}>Help centre</p><h1>Questions, answered</h1></div><div className={styles.search}><div className={styles.searchField}><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></svg><input type="search" aria-label="Search questions" placeholder="Search questions" value={search} onChange={event => setSearch(event.target.value)} /></div><p role="status">{!query && topic === "All" ? "16 questions across 5 topics" : `${visible.length} ${visible.length === 1 ? "question" : "questions"} found${topic === "All" ? "" : ` in ${topic}`}`}</p></div></div>
    <div className={styles.layout}><aside className={styles.sidebar}><h2>Topics</h2><div className={styles.filters} role="group" aria-label="Filter by topic">{["All", ...groups.map(group => group.title)].map(name => <button type="button" key={name} aria-pressed={topic === name} onClick={() => setTopic(name)}><span>{name}</span><span>{name === "All" ? matching.length : matching.filter(item => item.topic === name).length}</span></button>)}</div><div className={styles.sidebarContact}><p>Can’t find it? We reply within a day.</p><Link href="/contact">Contact support →</Link></div></aside>
    <div className={styles.questions}>{visible.map(item => {const stableId = `faq-${questions.findIndex(question => question.q === item.q)}`; const expanded = open === item.q; return <article key={item.q} className={`${styles.question} ${expanded ? styles.expanded : ""}`}><h2><button id={`${stableId}-button`} type="button" aria-expanded={expanded} aria-controls={`${stableId}-answer`} onClick={() => setOpen(expanded ? null : item.q)}><span><small>{item.topic}</small><strong>{item.q}</strong></span><span className={styles.toggle} aria-hidden="true">{expanded ? "−" : "+"}</span></button></h2><div id={`${stableId}-answer`} role="region" aria-labelledby={`${stableId}-button`} hidden={!expanded}><p>{item.a}</p></div></article>; })}{visible.length === 0 && <div className={styles.empty}><h2>No questions found</h2><p>Try another search or choose a different topic.</p><button type="button" onClick={() => {setSearch("");setTopic("All");}}>Clear filters</button></div>}</div></div>
  </>;
}
