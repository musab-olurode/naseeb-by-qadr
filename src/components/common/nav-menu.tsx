import React from 'react';

import { Button } from '@/components/ui/button';

import Link from 'next/link';

const navItems = [
	{
		label: 'Event Details',
		href: '#event-details',
	},
	{
		label: 'RSVP',
		href: '#rsvp',
	},
	{
		label: 'Countdown',
		href: '#countdown',
	},
];

const NavMenu = () => {
	return (
		<div>
			<div className='hidden items-center gap-x-2 lg:flex'>
				{navItems.map((item, index) => (
					<Link
						key={item.href}
						className='text-primary text-lg leading-[90%]'
						href={item.href}
					>
						{item.label}
						{index < navItems.length - 1 && ','}
					</Link>
				))}
			</div>
			<Button className='flex size-12 items-center justify-center rounded-full px-0 py-0 lg:hidden'>
				<svg
					className='size-[1.4375rem] h-[0.8125rem] shrink-0'
					fill='none'
					height='13'
					viewBox='0 0 23 13'
					width='23'
					xmlns='http://www.w3.org/2000/svg'
				>
					<line stroke='currentColor' x2='23' y1='0.5' y2='0.5' />
					<line stroke='currentColor' x2='23' y1='6.5' y2='6.5' />
					<line stroke='currentColor' x2='23' y1='12.5' y2='12.5' />
				</svg>
			</Button>
		</div>
	);
};

export default NavMenu;
