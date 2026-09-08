"use client";

import { useEffect, useRef } from "react";

import styles from "./CustomCursor.module.css";

export function CustomCursor() {
	const cursorRef = useRef<HTMLDivElement>(null);
	const hoverRef = useRef(false);

	useEffect(() => {
		const moveCursor = (e: MouseEvent) => {
			if (!cursorRef.current) return;

			cursorRef.current.style.left = `${e.clientX}px`;
			cursorRef.current.style.top = `${e.clientY}px`;

			const target = e.target as HTMLElement;

			const isInteractive = target.closest(
				"a, button, input, textarea, select, [role='button']"
			);

			if (isInteractive && !hoverRef.current) {
				hoverRef.current = true;
				cursorRef.current.classList.add(styles.hover);
			} else if (!isInteractive && hoverRef.current) {
				hoverRef.current = false;
				cursorRef.current.classList.remove(styles.hover);
			}
		};

		window.addEventListener("mousemove", moveCursor);

		return () => {
			window.removeEventListener("mousemove", moveCursor);
		};
	}, []);

	return (
		<div
			ref={cursorRef}
			className={styles.cursor}
			aria-hidden="true"
		/>
	);
}
