'use client';

import React, { useRef } from 'react';

import { cn } from '@/lib/utils';

import { usePreloaderReady } from '@/components/common/preloader';

import { useInView } from 'motion/react';
import * as motion from 'motion/react-client';

type Props = {
	className?: string;
	classNames?: {
		line?: string;
	};
	lines: React.ReactNode[];
	delay?: number;
	duration?: number;
	opacityDuration?: number;
	staggerLines?: number;
	maskLines?: boolean;
	staggerCustomDelay?: boolean;
	delayUntilReady?: boolean;
	viewportOnce?: boolean;
};

const TextReveal = ({ viewportOnce = true, ...props }: Props) => {
	const isPreloaderReady = usePreloaderReady();
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: viewportOnce });
	const usePreloaderGate = Boolean(props.delayUntilReady);
	const canAnimate = !usePreloaderGate || (isPreloaderReady && isInView);

	const getDelay = (index: number) => {
		const stagger = props.staggerLines ?? 0.08;
		const baseDelay = props.delay ?? 0;

		return props.staggerCustomDelay
			? baseDelay + index * stagger
			: (props.delay ?? index * stagger);
	};

	return (
		<motion.div ref={ref} className={cn('flex flex-col', props.className)}>
			{props.lines.map((line, index) => (
				<span
					key={index}
					className={cn(
						'relative',
						props.maskLines && 'overflow-hidden',
						props.classNames?.line,
					)}
				>
					<motion.span className='whitespace-nowrap opacity-0'>
						{line}
					</motion.span>
					{usePreloaderGate ? (
						<motion.span
							animate={
								canAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: '100%' }
							}
							className='absolute top-0 left-0 whitespace-nowrap'
							initial={{ opacity: 0, y: '100%' }}
							transition={{
								opacity: {
									delay: getDelay(index),
									duration: props.opacityDuration ?? props.duration ?? 1,
									ease: [0.22, 1, 0.36, 1],
								},
								y: {
									delay: getDelay(index),
									duration: props.duration ?? 1,
									ease: [0.22, 1, 0.36, 1],
								},
							}}
						>
							{line}
						</motion.span>
					) : (
						<motion.span
							className='absolute top-0 left-0 whitespace-nowrap'
							initial={{ opacity: 0, y: '100%' }}
							transition={{
								opacity: {
									delay: getDelay(index),
									duration: props.opacityDuration ?? props.duration ?? 1,
									ease: [0.22, 1, 0.36, 1],
								},
								y: {
									delay: getDelay(index),
									duration: props.duration ?? 1,
									ease: [0.22, 1, 0.36, 1],
								},
							}}
							viewport={{ once: viewportOnce }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							{line}
						</motion.span>
					)}
				</span>
			))}
		</motion.div>
	);
};

export default TextReveal;
