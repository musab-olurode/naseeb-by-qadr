'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useMotionValueEvent, useScroll } from 'motion/react';

const TOTAL_FRAMES = 192; // 00000 to 00191 @ 24fps

const getFramePath = (index: number) => {
	const filename = `Scroll trigger sequence_${String(index).padStart(5, '0')}.png`;

	return `/images/ribbon/${encodeURIComponent(filename)}`;
};

const TyingRibbon = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const stickyRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());
	const [imagesLoaded, setImagesLoaded] = useState(false);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 50%', 'end end'],
	});

	// Preload all frame images
	useEffect(() => {
		let loaded = 0;
		const total = TOTAL_FRAMES;

		const checkAllLoaded = () => {
			loaded++;

			if (loaded === total) {
				setImagesLoaded(true);
			}
		};

		for (let i = 0; i < total; i++) {
			const img = new Image();

			img.onload = checkAllLoaded;
			img.onerror = checkAllLoaded;
			img.src = getFramePath(i);
			imagesRef.current.set(i, img);
		}

		return () => {
			imagesRef.current.clear();
		};
	}, []);

	const drawFrame = useCallback(
		(progress: number) => {
			const canvas = canvasRef.current;

			if (!canvas || !imagesLoaded) return;

			const frameIndex = Math.min(
				Math.floor(progress * TOTAL_FRAMES),
				TOTAL_FRAMES - 1,
			);
			const img = imagesRef.current.get(frameIndex);

			if (!img?.complete) return;

			const ctx = canvas.getContext('2d');

			if (!ctx) return;

			// Clear and draw current frame
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		},
		[imagesLoaded],
	);

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		drawFrame(latest);
	});

	// Resize canvas to match sticky viewport
	useEffect(() => {
		const canvas = canvasRef.current;
		const sticky = stickyRef.current;

		if (!canvas || !sticky) return;

		const resizeObserver = new ResizeObserver((entries) => {
			const entry = entries[0];
			const { width, height } = entry.contentRect;

			canvas.width = width;
			canvas.height = height;
			drawFrame(scrollYProgress.get());
		});

		resizeObserver.observe(sticky);

		return () => {
			resizeObserver.disconnect();
		};
	}, [drawFrame, scrollYProgress]);

	// Initial draw when images load
	useEffect(() => {
		if (imagesLoaded) {
			drawFrame(scrollYProgress.get());
		}
	}, [imagesLoaded, drawFrame, scrollYProgress]);

	return (
		<section ref={containerRef} className='relative h-[200vh] w-full'>
			<div
				ref={stickyRef}
				className='sticky top-1/2 flex h-[11.654375rem] w-full -translate-y-1/2 items-center justify-center min-[800px]:top-0 min-[800px]:h-screen min-[800px]:translate-y-0'
			>
				<canvas
					ref={canvasRef}
					className='h-full w-full'
					style={{ objectFit: 'cover' }}
				/>
			</div>
		</section>
	);
};

export default TyingRibbon;
