'use client';

import { useEffect, useRef } from 'react';

import type { LenisRef } from 'lenis/react';
import { ReactLenis } from 'lenis/react';
import { cancelFrame, frame } from 'motion/react';

type Props = {
	children: React.ReactNode;
};

const SmoothScroll = ({ children }: Props) => {
	const lenisRef = useRef<LenisRef>(null);

	useEffect(() => {
		function update(data: { timestamp: number }) {
			const time = data.timestamp;

			lenisRef.current?.lenis?.raf(time);
		}

		frame.update(update, true);

		return () => {
			cancelFrame(update);
		};
	}, []);

	return (
		<>
			<ReactLenis ref={lenisRef} root options={{ autoRaf: false }} />
			{children}
		</>
	);
};

export default SmoothScroll;
