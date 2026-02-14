import React from 'react';

import { cn } from '@/lib/utils';

import Image from 'next/image';

type Props = {
	image: string;
	caption?: string;
	classNames?: {
		base?: string;
		image?: string;
		caption?: string;
	};
};

const Polaroid = ({ image, caption, classNames }: Props) => {
	return (
		<div
			className={cn(
				'absolute bg-white p-[0.4375rem] pb-[3.55375rem] [box-shadow:0px_4.55px_2.27px_0px_#00000026]',
				classNames?.base,
			)}
		>
			<div
				className={cn(
					'relative h-[10.375rem] w-[13.9225rem]',
					classNames?.image,
				)}
			>
				<Image fill alt='Polaroid' className='object-cover' src={image} />
			</div>
			{caption && (
				<p
					className={cn(
						'text-primary font-aphrodite-slim-contextual absolute bottom-0 left-1/2 -translate-x-1/2 text-center text-lg leading-[110%] font-medium',
						classNames?.caption,
					)}
				>
					{caption}
				</p>
			)}
		</div>
	);
};

export default Polaroid;
