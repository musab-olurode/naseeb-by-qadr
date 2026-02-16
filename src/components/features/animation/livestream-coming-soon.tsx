'use client';

import React from 'react';

import { cn } from '@/lib/utils';

import * as motion from 'motion/react-client';

type Props = {
	className?: string;
};

const LivestreamComingSoon = ({ className }: Props) => {
	return (
		<motion.span
			animate={{ y: '0%', opacity: 1 }}
			className={cn('text-center text-lg leading-[120%]', className)}
			initial={{ y: '120%', opacity: 0 }}
			transition={{
				duration: 1,
				delay: 0.5,
				ease: [0.22, 1, 0.36, 1],
				opacity: {
					duration: 1,
					delay: 0.5,
					ease: [0.22, 1, 0.36, 1],
				},
			}}
		>
			Wedding live stream coming soon
		</motion.span>
	);
};

export default LivestreamComingSoon;
