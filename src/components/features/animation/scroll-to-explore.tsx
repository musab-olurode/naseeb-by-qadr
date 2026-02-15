'use client';

import React from 'react';

import * as motion from 'motion/react-client';

const ScrollToExplore = () => {
	return (
		<motion.span
			animate={{ y: '0%', opacity: 1 }}
			className='text-lg leading-[120%]'
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
			Scroll down to explore
		</motion.span>
	);
};

export default ScrollToExplore;
