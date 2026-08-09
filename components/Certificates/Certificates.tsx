import { certificates } from "@/data/content";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";
import { ArrowUpRightIcon } from "@/components/icons/Icons";

import styles from "./Certificates.module.css";

export function Certificates() {
  return (
    <section className={styles.section} id="Certificates">
      <RevealOnScroll className={styles.head}>
        <span className={styles.tag}>05</span>
        <h2>Sertifikalar</h2>
      </RevealOnScroll>

      <RevealOnScroll className={styles.grid}>
        {certificates.map((cert) => (
          <div className={styles.card} key={cert.title}>
            <div className={styles.top}>
              <h3>{cert.title}</h3>
              <span className={styles.year}>{cert.year}</span>
            </div>
            <div className={styles.issuer}>{cert.issuer}</div>
            {cert.url && (
              <a className={styles.link} href={cert.url} target="_blank" rel="noopener">
                Doğrula
                <ArrowUpRightIcon width={14} height={14} />
              </a>
            )}
          </div>
        ))}
      </RevealOnScroll>
    </section>
  );
}
