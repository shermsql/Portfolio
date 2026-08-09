import { experience } from "@/data/content";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";

import styles from "./Experience.module.css";

export function Experience() {
  return (
    <section className={styles.section} id="Experience">
      <RevealOnScroll className={styles.head}>
        <span className={styles.tag}>02</span>
        <h2>Deneyim</h2>
      </RevealOnScroll>

      <RevealOnScroll className={styles.timeline}>
        {experience.map((item) => (
          <div className={styles.item} key={item.title}>
            <span className={styles.dot} />
            <div className={styles.card}>
              <div className={styles.top}>
                <div>
                  <h3>{item.title}</h3>
                  <div className={styles.org}>{item.org}</div>
                </div>
                <span className={styles.date}>{item.date}</span>
              </div>
              <ul className={styles.list}>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
