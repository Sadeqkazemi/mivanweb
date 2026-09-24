"use client";

import Link from "next/link";
import Image from "next/image";
import { GoogleG } from "@/components/Buttons";
import { authClient } from "@/lib/auth-client";
import styles from "@/app/home.module.css";

export function UserCtaBanner() {
  const { data } = authClient.useSession();
  const signedIn = Boolean(data?.user);
  const fullName = data?.user?.name?.trim() || "Your Mivan profile";
  const firstName = fullName.split(/\s+/)[0] || "there";
  const initial = signedIn ? firstName.charAt(0).toUpperCase() : "M";

  return (
    <section className={`${styles.section} ${styles.userCta}`} aria-labelledby="user-cta-title">
      <div className={styles.userCtaCopy}>
        <p className={styles.userCtaEyebrow}>{signedIn ? "WELCOME BACK" : "YOUR MIVAN SPACE"}</p>
        <h2 id="user-cta-title">{signedIn ? <>Your next meal is ready, <span>{firstName}.</span></> : <>Meet your personal<br /><span>food space.</span></>}</h2>
        <p>{signedIn ? "Mivan has already combined your taste, health profile and latest signals into today’s best match." : "Create one private profile for your taste, diet and daily health signals — then take it anywhere you eat."}</p>
        <div className={styles.userCtaActions}>
          {signedIn ? <>
              <Link href="/dashboard" className={`${styles.button} ${styles.primary}`}>Open my dashboard</Link>
          </> : <>
            <Link href="/login" className={`${styles.button} ${styles.primary}`}><GoogleG size={18} />Create my profile</Link>
            <Link href="/how-it-works" className={styles.userCtaSecondary}>See how it works</Link>
          </>}
        </div>
        <div className={styles.userCtaTrust}><span aria-hidden="true">✓</span>Health data encrypted · private by design</div>
      </div>

      <div className={styles.userCtaCard}>
        <div className={styles.userCtaCardTop}>
          <span className={styles.userCtaAvatar}>{initial}</span>
          <div className={styles.userCtaIdentity}><small>{signedIn ? "YOUR MIVAN PROFILE" : "PROFILE PREVIEW"}</small><strong>{fullName}</strong><span>{signedIn ? data?.user?.email : "Taste · health · daily signals"}</span></div>
          <span className={styles.userCtaActive}><i />{signedIn ? "ACTIVE" : "PREVIEW"}</span>
        </div>
        <div className={styles.userCtaMeal}>
          <div className={styles.userCtaMealImage}><Image src="/images/food-herb-chicken-plate.webp" alt="Herb-grilled chicken with asparagus and tomatoes" fill sizes="150px" /></div>
          <div className={styles.userCtaMealCopy}>
            <div><small>TODAY’S BEST MATCH</small><span>92%</span></div>
            <strong>Herb chicken &amp; greens</strong>
            <p>Matched to your protein and recovery targets.</p>
            <div className={styles.userCtaMealTags}><span>High protein</span><span>Balanced</span></div>
          </div>
        </div>
        <div className={styles.userCtaStatusGrid}>
          <div className={styles.userCtaProgress}><span>PROFILE STRENGTH</span><strong>{signedIn ? "86% ready" : "Ready in 2 min"}</strong><i><b style={{width:signedIn ? "86%" : "18%"}} /></i></div>
          <div className={styles.userCtaWatch}><span>LIVE SIGNAL</span><strong><i />Apple Watch</strong><small>Stress 78 · synced now</small></div>
        </div>
              <div className={styles.userCtaCardFooter}><span>24 flavor signals learned</span><Link href={signedIn ? "/settings" : "/login"}>{signedIn ? "Refine profile" : "Build my profile"}</Link></div>
      </div>
    </section>
  );
}
