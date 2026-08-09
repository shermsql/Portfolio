"use client";

import { navLinks, site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import { DownloadIcon } from "@/components/icons/Icons";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a href="#Top" className={styles.brand}>
          <span className={styles.brandMark}>BK</span>
          <span>{site.name}</span>
        </a>

        <nav className={styles.links}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.cvButton}
            href={site.cvPath}
            download={site.cvFileName}
            aria-label="Özgeçmişi İndir"
            title="Özgeçmişi İndir"
          >
            <DownloadIcon width={17} height={17} />
            <span>Özgeçmiş</span>
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
