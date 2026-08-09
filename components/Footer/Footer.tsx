import { site, socialLinks, navLinks, projects } from "@/data/content";
import { socialIconMap, ArrowUpIcon } from "@/components/icons/Icons";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.card}>
        <span className={styles.topGlow} aria-hidden="true" />

        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <span className={styles.brandMark}>BK</span>
              <span>{site.name}</span>
            </div>
            <p className={styles.tagline}>
              Güvenli ve ölçeklenebilir web sistemleri kuran full-stack geliştirici.
            </p>
            <span className={styles.status}>
              <span className={styles.pulse} />
              Yeni Projelere Açık
            </span>
          </div>

          <div className={styles.col}>
            <h4>Navigasyon</h4>
            <nav className={styles.linkList}>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>{link.label}</a>
              ))}
            </nav>
          </div>

          <div className={styles.col}>
            <h4>Projeler</h4>
            <nav className={styles.linkList}>
              {projects.map((project) =>
                project.link ? (
                  <a key={project.title} href={project.link.url} target="_blank" rel="noopener">{project.title}</a>
                ) : (
                  <a key={project.title} href="#Projects">{project.title}</a>
                )
              )}
            </nav>
          </div>

          <div className={styles.col}>
            <h4>İletişim</h4>
            <a className={styles.contactLine} href={`mailto:${site.email}`}>{site.email}</a>
            <a className={styles.contactLine} href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            <div className={styles.socialRow}>
              {socialLinks.map((link) => {
                const Icon = socialIconMap[link.icon];
                return (
                  <a key={link.label} className={styles.socialChip} href={link.url} target="_blank" rel="noopener" aria-label={link.label}>
                    <Icon width={17} height={17} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomText}>
            <span>© 2026 {site.name}</span>
            <span className={styles.mono}>Sıfır hata, maksimum kahve.</span>
          </div>
          <a className={styles.toTop} href="#Top" aria-label="Başa Dön">
            <ArrowUpIcon width={16} height={16} />
            Başa Dön
          </a>
        </div>
      </div>
    </footer>
  );
}
