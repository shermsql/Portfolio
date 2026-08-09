import { education, languages } from "@/data/content";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";

import styles from "./EducationAndLanguages.module.css";

export function EducationLanguages() {
  return (
    <section className={styles.section}>
      <RevealOnScroll className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Eğitim</h2>
          {education.map((item) => (
            <div className={styles.eduItem} key={item.title}>
              <span className={styles.eduYear}>{item.year}</span>
              <div>
                <h4>{item.title}</h4>
                <div className={styles.school}>{item.school}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Diller</h2>
          {languages.map((lang) => (
            <div className={styles.langRow} key={lang.name}>
              <span>{lang.name}</span>
              <div className={styles.langMeta}>
                <span className={styles.langLevel}>{lang.level}</span>
                <div className={styles.langBar}>
                  <span style={{ width: `${lang.percent}%` }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
