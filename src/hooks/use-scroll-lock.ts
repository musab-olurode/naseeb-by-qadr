import { useEffect } from 'react';

/**
 * Locks/unlocks body scroll. Uses position: fixed for reliable behavior across
 * all devices (including iOS).
 *
 * @param locked - When true, prevents page scroll. When false, restores scroll.
 */
export function useScrollLock(locked: boolean) {
	useEffect(() => {
		if (locked) {
			const scrollY = window.scrollY;

			document.documentElement.style.overflow = 'hidden';
			document.body.style.cssText = `
				overflow: hidden;
				position: fixed;
				top: -${scrollY.toString()}px;
				left: 0;
				right: 0;
			`;

			return () => {
				document.documentElement.style.overflow = '';
				document.body.style.cssText = '';
				window.scrollTo(0, scrollY);
			};
		}

		document.documentElement.style.overflow = '';
		document.body.style.cssText = '';
	}, [locked]);
}
