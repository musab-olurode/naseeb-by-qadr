'use client';

import React, { useEffect, useState } from 'react';

const TARGET_DATE = new Date('2026-04-25T00:00:00');

const padWithZero = (n: number) => n.toString().padStart(2, '0');

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

function getTimeLeft(target: Date): TimeLeft | null {
	const now = new Date();
	const diff = target.getTime() - now.getTime();

	if (diff <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	const totalSeconds = Math.floor(diff / 1000);
	const days = Math.floor(totalSeconds / (24 * 60 * 60));
	const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
	const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
	const seconds = totalSeconds % 60;

	return { days, hours, minutes, seconds };
}

function TimeUnit({ value, label }: { value: string; label: string }) {
	return (
		<div className='relative flex h-[12.25rem] w-[9.8125rem] flex-col overflow-hidden rounded-2xl'>
			{/* Split halves per Figma design */}
			<div className='bg-primary -mb-px h-[6.125rem] w-full shrink-0 rounded-2xl' />
			<div className='bg-primary h-[6.125rem] w-full shrink-0 rounded-2xl' />
			{/* Number - Louize Display 100px */}
			<div className='text-primary-foreground font-louize-display absolute inset-x-0 top-[1.9375rem] flex justify-center text-[6.25rem] leading-[100%] tracking-[-0.02em]'>
				{value}
			</div>
			{/* Label - Neue Montreal 16px */}
			<div className='text-primary-foreground absolute right-0 bottom-4 left-0 text-center text-base leading-[1.2] tracking-[-0.02em]'>
				{label}
			</div>
		</div>
	);
}

export default function CountdownTimer() {
	const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

	useEffect(() => {
		const update = () => {
			setTimeLeft(getTimeLeft(TARGET_DATE));
		};

		update();

		const interval = setInterval(update, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	if (timeLeft === null) {
		return (
			<div className='flex items-center gap-6'>
				<div className='bg-primary/60 h-[12.25rem] w-[9.8125rem] animate-pulse rounded-2xl' />
				<span className='text-primary font-louize-display text-[8rem] leading-[65%]'>
					:
				</span>
				<div className='bg-primary/60 h-[12.25rem] w-[9.8125rem] animate-pulse rounded-2xl' />
				<span className='text-primary font-louize-display text-[8rem] leading-[65%]'>
					:
				</span>
				<div className='bg-primary/60 h-[12.25rem] w-[9.8125rem] animate-pulse rounded-2xl' />
				<span className='text-primary font-louize-display text-[8rem] leading-[65%]'>
					:
				</span>
				<div className='bg-primary/60 h-[12.25rem] w-[9.8125rem] animate-pulse rounded-2xl' />
			</div>
		);
	}

	return (
		<div className='flex flex-wrap items-center justify-center gap-6'>
			<TimeUnit label='Days' value={timeLeft.days.toString()} />
			<span
				aria-hidden
				className='text-primary font-louize-display text-[7rem] leading-[65%] md:text-[8rem]'
			>
				:
			</span>
			<TimeUnit label='Hours' value={padWithZero(timeLeft.hours)} />
			<span
				aria-hidden
				className='text-primary font-louize-display text-[7rem] leading-[65%] md:text-[8rem]'
			>
				:
			</span>
			<TimeUnit label='Minutes' value={padWithZero(timeLeft.minutes)} />
			<span
				aria-hidden
				className='text-primary font-louize-display text-[7rem] leading-[65%] md:text-[8rem]'
			>
				:
			</span>
			<TimeUnit label='Seconds' value={padWithZero(timeLeft.seconds)} />
		</div>
	);
}
