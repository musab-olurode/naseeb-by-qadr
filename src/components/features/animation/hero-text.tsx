'use client';

import React from 'react';

import TextReveal from '@/components/features/animation/text-reveal';

const HeroText = () => {
	return (
		<h1 className='font-louize-display text-primary relative w-fit text-center text-[25vw] leading-[73%] tracking-[-0.03em] md:text-[15.5vw]'>
			<TextReveal
				className='font-arabic-typesetting absolute top-0 left-[22%] text-[0.2em] leading-none'
				delay={0.5}
				duration={1}
				lines={['﷽']}
				opacityDuration={2}
			/>
			<TextReveal className='items-center' lines={['Nusaybah', 'Qais']} />{' '}
			<TextReveal
				className='font-aphrodite-slim-contextual absolute bottom-0 left-[5%] h-fit text-[0.5em] leading-[73%]'
				delay={0.3}
				duration={0.8}
				lines={['&']}
			/>
			<TextReveal
				className='font-aphrodite-slim-contextual absolute right-[2%] -bottom-1 text-[0.4em] leading-[81%] tracking-[-0.03em]'
				delay={0.4}
				duration={0.8}
				lines={['(26)']}
			/>
		</h1>
	);
};

export default HeroText;
