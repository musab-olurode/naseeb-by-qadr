'use client';

import React from 'react';

import * as motion from 'motion/react-client';
import Image from 'next/image';

const LivestreamPlayer = () => {
	return (
		<motion.button
			animate={{ y: '0%', opacity: 1 }}
			className='relative h-[13.65rem] w-[19.625rem] cursor-pointer overflow-hidden rounded-[0.375rem] sm:h-[8.25rem] sm:w-[13.5625rem]'
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
			<Image
				fill
				alt='Livestream thumbnail'
				className='object-cover'
				src='/images/thumbnail.png'
			/>
			<div className='bg-primary/70 absolute inset-0 mix-blend-multiply' />
			<div className='bg-primary/60 absolute inset-0 mix-blend-color' />
			<svg
				className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
				fill='none'
				height='56'
				viewBox='0 0 56 56'
				width='56'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M18.667 14L42.0003 28L18.667 42V14Z'
					fill='#F5F1E6'
					stroke='#F5F1E6'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				/>
			</svg>
		</motion.button>
	);
};

export default LivestreamPlayer;
