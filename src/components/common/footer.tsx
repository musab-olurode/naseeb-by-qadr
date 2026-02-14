import React from 'react';

import Image from 'next/image';

function ContactBlock({
	label,
	number,
	subLabel,
}: {
	label: string;
	number: string;
	subLabel?: string;
}) {
	return (
		<div className='flex flex-col items-center gap-2'>
			<span className='text-center text-base leading-[1.2] text-[#232323]'>
				{label}
			</span>
			<a
				className='font-louize-display text-center text-2xl leading-[1.2] tracking-[-0.02em] text-[#232323] hover:underline'
				href={`tel:${number.replace(/\s/g, '')}`}
			>
				{number}
			</a>
			{subLabel && (
				<span className='text-center text-base leading-[1.2] text-[#232323]'>
					{subLabel}
				</span>
			)}
		</div>
	);
}

export default function Footer() {
	return (
		<footer className='bg-primary relative flex min-h-screen items-center justify-center overflow-hidden'>
			{/* Background image */}
			<div className='absolute inset-0'>
				<Image
					aria-hidden
					fill
					alt=''
					className='object-cover'
					priority={false}
					src='/images/footer-bg.png'
				/>
			</div>

			{/* Cream content card */}
			<div className='relative mx-4 flex w-full max-w-[32rem] flex-col items-center overflow-visible rounded-lg bg-[#F5F1E6] px-6 pt-[3.5rem] pb-[3.875rem]'>
				<div className='flex flex-col items-center gap-[5.5625rem]'>
					{/* Gift Registry */}
					<div className='flex flex-col items-center gap-8'>
						<div className='flex flex-col items-center gap-3'>
							<h3 className='text-primary font-louize-display text-center text-[3.125rem] leading-[0.73em] tracking-[-0.03em]'>
								Gift Registry
							</h3>
							<p className='max-w-[19rem] text-center text-base leading-[1.1] text-[#232323]'>
								Your presence is the real present, but if you&apos;d like to
								extend your kindness through a gift, kindly contact
							</p>
						</div>
						<div className='flex flex-row flex-wrap justify-center gap-10'>
							<ContactBlock label='Groom' number='08114810116' />
							<ContactBlock label='Bride' number='09075556919' />
						</div>
					</div>

					{/* RSVP */}
					<div className='flex flex-col items-center gap-8'>
						<h3 className='text-primary font-louize-display text-center text-[3.125rem] leading-[0.73em] tracking-[-0.03em]'>
							RSVP
						</h3>
						<div className='flex flex-row flex-wrap justify-center gap-10'>
							<ContactBlock
								label="Groom's Family"
								number='08114810116'
								subLabel='Abdullah'
							/>
							<ContactBlock
								label="Bride's Family"
								number='09075556919'
								subLabel='Umar'
							/>
						</div>
					</div>
				</div>

				{/* Closing message */}
				<p className='mt-12 max-w-[19rem] text-center text-base leading-[1.1] text-[#232323]'>
					Your presence will not only honor us but also add warmth and beauty to
					our celebration.
				</p>

				<p className='text-primary font-aphrodite-slim-contextual mt-[3.75rem] text-center text-[2.5rem] leading-[0.73em] tracking-[-0.02em]'>
					Jazakumullah Khairan
				</p>
			</div>
		</footer>
	);
}
