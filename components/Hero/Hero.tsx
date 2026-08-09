import { site, socialLinks } from "@/data/content";
import { socialIconMap, DownloadIcon } from "@/components/icons/Icons";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} id="Top">
      <span className={styles.eyebrow}>
        <span className={styles.pulse} /> Uzaktan Çalışıyor · Yeni Projelere Açık
      </span>

      <h1 className={styles.heading}>
        Merhaba, ben Batuhan —<br />
        <span className={styles.accent}>Güvenli</span> ve ölçeklenebilir
        <br />
        web sistemleri oluşturuyorum.
      </h1>

      <p className={styles.lead}>
        Güvenli ve ölçeklenebilir web uygulamaları geliştirmede uzmanlaşmış,
        sonuç odaklı bir Full-Stack Geliştiriciyim. Uçtan uca mimarilerde,
        veritabanı yönetiminde ve sistem entegrasyonlarında yetkinim;
        dijital platformların güvenliğini artırmak için siber güvenlik pratiklerini kodlama süreçlerine entegre etmeye tutkuluyum.
        İnternette{" "}
        <strong>{site.handle}</strong> olarak biliniyorum.
      </p>

      <div className={styles.actions}>
        <a href="#Projects" className={`${styles.btn} ${styles.btnPrimary}`}>
          Projelerime Göz At
        </a>
        <a
          href={site.cvPath}
          download={site.cvFileName}
          className={`${styles.btn} ${styles.btnGhost}`}
        >
          <DownloadIcon width={17} height={17} />
          Özgeçmişi İndir
        </a>
      </div>

      <div className={styles.socialRow}>
        {socialLinks.map((link) => {
          const Icon = socialIconMap[link.icon];
          return (
            <a
              key={link.label}
              className={styles.socialChip}
              href={link.url}
              target="_blank"
              rel="noopener"
              aria-label={link.label}
            >
              <Icon width={19} height={19} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
