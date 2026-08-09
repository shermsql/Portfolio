import { site } from "@/data/content";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section className={styles.section} id="Contact">
      <RevealOnScroll className={styles.card}>
        <h2>Birlikte bir şeyler inşa edelim</h2>
        <p>Yeni bir proje, iş birliği ya da sadece bir merhaba için ulaşmaktan çekinmeyin.</p>
        <a className={styles.btn} href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <div className={styles.meta}>
          <span>{site.phone}</span>
          <span>{site.location}</span>
          <span>@{site.handle}</span>
        </div>
      </RevealOnScroll>
    </section>
  );
}
