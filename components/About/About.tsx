import { about, stats } from "@/data/content";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";

import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.section} id="About">
      <RevealOnScroll className={styles.head}>
        <span className={styles.tag}>01</span>
        <h2>Hakkında</h2>
      </RevealOnScroll>

      <RevealOnScroll className={styles.grid}>
        <div className={styles.card}>
          <p>{about.paragraph}</p>
        </div>
        <div>
          {stats.map((stat) => (
            <div className={styles.statCard} key={stat.label}>
              <span className={styles.num}>{stat.num}</span>
              <span className={styles.lbl}>{stat.label}</span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
