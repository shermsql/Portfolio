import { projects } from "@/data/content";
import { projectIconMap, ArrowUpRightIcon, GithubIcon } from "@/components/icons/Icons";
import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";

import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section className={styles.section} id="Projects">
      <RevealOnScroll className={styles.head}>
        <span className={styles.tag}>03</span>
        <h2>Projeler</h2>
      </RevealOnScroll>

      <RevealOnScroll className={styles.grid}>
        {projects.map((project) => {
          const Icon = projectIconMap[project.icon];
          const badgeClass =
            project.badge.tone === "live" ? styles.badgeLive : styles.badgeWin;

          return (
            <div className={styles.card} key={project.title}>
              <span className={`${styles.badge} ${badgeClass}`}>{project.badge.text}</span>

              <div className={styles.icon}>
                <Icon width={24} height={24} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span className={styles.tagPill} key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.linkRow}>
                {project.link ? (
                  <a className={styles.link} href={project.link.url} target="_blank" rel="noopener">
                    {project.link.label}
                    <ArrowUpRightIcon width={14} height={14} />
                  </a>
                ) : (
                  <span className={styles.linkDisabled}>Yakında!</span>
                )}

                {project.repoUrl && (
                  <a className={styles.repoLink} href={project.repoUrl} target="_blank" rel="noopener">
                    <GithubIcon width={14} height={14} />
                    Kaynak Kodu
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </RevealOnScroll>
    </section>
  );
}
