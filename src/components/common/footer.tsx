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
			<span className='text-center text-sm leading-[1.2] text-[#232323] md:text-base'>
				{label}
			</span>
			<a
				className='font-louize-display text-center text-2xl leading-[1.2] tracking-[-0.02em] text-[#232323] hover:underline'
				href={`tel:${number.replace(/\s/g, '')}`}
			>
				{number}
			</a>
			{subLabel && (
				<span className='tex-sm text-center leading-[1.2] text-[#232323] md:text-base'>
					{subLabel}
				</span>
			)}
		</div>
	);
}

export default function Footer() {
	return (
		<footer className='bg-primary relative h-[200vh] w-full'>
			{/* Background image */}
			<div className='sticky top-0 h-screen w-full'>
				<Image
					aria-hidden
					fill
					alt=''
					className='object-cover'
					priority={false}
					src='/images/footer-bg.webp'
				/>
			</div>

			<div className='flex h-screen w-full items-center justify-center'>
				{/* Cream content card */}
				<div className='relative mx-4 flex w-full max-w-[32rem] flex-col items-center overflow-visible bg-[#F5F1E6] px-6 pt-[3.5rem] pb-[3.875rem]'>
					<div className='flex flex-col items-center gap-[5.5625rem]'>
						{/* Gift Registry */}
						<div
							className='flex flex-col items-center gap-8'
							id='gift-registry'
						>
							<div className='flex flex-col items-center gap-3'>
								<h3 className='text-primary font-louize-display text-center text-[2.5rem] leading-[0.73em] tracking-[-0.03em] md:text-[3.125rem]'>
									Gift Registry
								</h3>
								<p className='max-w-[19rem] text-center text-sm leading-[1.1] text-[#232323] md:text-base'>
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
						<div className='flex flex-col items-center gap-8' id='rsvp'>
							<h3 className='text-primary font-louize-display text-center text-[2.5rem] leading-[0.73em] tracking-[-0.03em] md:text-[3.125rem]'>
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
					<p className='mt-12 max-w-[19rem] text-center text-sm leading-[1.1] text-[#232323] md:text-base'>
						Your presence will not only honor us but also add warmth and beauty
						to our celebration.
					</p>
					<p className='text-primary font-aphrodite-slim-contextual mt-[3.75rem] text-center text-[1.75rem] leading-[0.73em] tracking-[-0.02em] md:text-[2.5rem]'>
						Jazakumullah Khairan
					</p>
				</div>
			</div>
		</footer>
	);
}
