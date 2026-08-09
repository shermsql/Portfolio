import { skills } from "@/data/content";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";

import styles from "./Skills.module.css";

export function Skills() {
  return (
    <section className={styles.section} id="Skills">
      <RevealOnScroll className={styles.head}>
        <span className={styles.tag}>04</span>
        <h2>Yetenekler</h2>
      </RevealOnScroll>

      <RevealOnScroll className={styles.wrap}>
        {skills.map((skill) => (
          <div className={styles.pill} key={skill}>
            <span className={styles.dot} />
            {skill}
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
