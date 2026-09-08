import { RevealOnScroll } from "@/components/RevealOnScroll/RevealOnScroll";
import { GithubIcon, ArrowUpRightIcon } from "@/components/Icons/Icons";

import styles from "./Sponsor.module.css";

export function Sponsor() {
	return (
		<section className={styles.section}>
			<RevealOnScroll className={styles.card}>
				<div className={styles.content}>
					<div className={styles.icon}>
						<GithubIcon />
					</div>

					<div>
						<h2>Açık Kaynağı Destekle</h2>
						<p>
							Açık kaynak projelerimi faydalı buluyorsan, geliştirmeye devam
							edebilmem için GitHub Sponsors üzerinden destek olabilirsin.
						</p>
					</div>
				</div>

				<a
					className={styles.button}
					href="https://github.com/sponsors/shermsql"
					target="_blank"
					rel="noreferrer"
				>
					<span>GitHub Sponsors</span>
					<ArrowUpRightIcon />
				</a>
			</RevealOnScroll>
		</section>
	);
}
