import Footer from '@/components/common/footer';
import Calendar from '@/components/features/homepage/calendar';
import CountdownTimer from '@/components/features/homepage/countdown-timer';
import Polaroid from '@/components/features/homepage/polaroid';
import { Button } from '@/components/ui/button';

import Image from 'next/image';

export default function Home() {
	return (
		<>
			<header>
				<nav className='relative flex items-center justify-between p-5'>
					<time
						className='bg-primary text-primary-foreground rounded-[0.375rem] px-4 py-3.5 text-lg leading-[90%]'
						dateTime='2026-04-25'
					>
						Saturday, 25 April 2026
					</time>
					<span className='font-louize-display absolute left-1/2 -translate-x-1/2 text-2xl font-medium tracking-[-0.02em]'>
						N&Q
					</span>
					<Button className='flex size-12 items-center justify-center rounded-full px-0 py-0'>
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
				</nav>
			</header>
			<main className=''>
				<section className='flex min-h-[calc(100vh-5.5rem)] flex-col items-center justify-between pt-[3.8125rem]'>
					<h1 className='font-louize-display text-primary relative h-fit w-fit text-center text-[15.5vw] leading-[73%] tracking-[-0.03em]'>
						<span className='font-arabic-typesetting absolute top-0 left-[22%] text-[0.2em] leading-none'>
							﷽
						</span>
						Nusaybah <br />
						<span className='font-aphrodite-slim-contextual absolute bottom-0 left-[5%] h-fit text-[0.5em] leading-[73%]'>
							&
						</span>
						Qais
						<span className='font-aphrodite-slim-contextual absolute right-[2%] -bottom-1 text-[0.4em] leading-[81%] tracking-[-0.03em]'>
							(26)
						</span>
					</h1>
					<div className='flex w-full items-end justify-between p-5'>
						<span className='text-lg leading-[120%]'>
							Scroll down to explore
						</span>
						<button className='relative h-[8.25rem] w-[13.5625rem] cursor-pointer overflow-hidden rounded-[0.375rem]'>
							<Image
								alt='Livestream thumbnail'
								height={132}
								src='/images/thumbnail.png'
								width={217}
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
						</button>
					</div>
				</section>

				<section className='flex h-screen flex-col items-center justify-center gap-y-16 text-center'>
					<h2 className='text-primary font-louize-display text-[6.25rem] leading-[73%] tracking-[-0.03em]'>
						Invitation
					</h2>
					<div className='flex max-w-[53.1875rem] flex-col gap-y-12'>
						<p className='text-[2.5rem] leading-[120%] tracking-[-0.02em]'>
							With the blessing of Allah, you are cordially invited to the Aqd &
							Walimatu Nikkahh of Nusaybah (Inumidun) & Qais (Moyosoreoluwa).
						</p>
						<span className='text-primary font-louize-display text-[3rem] leading-[73%] tracking-[-0.03em]'>
							(#Naseebyqadr)
						</span>
					</div>
				</section>

				<section className='flex h-screen items-center justify-center'>
					<div className='relative'>
						<Image
							alt='Green heart'
							height={590.23}
							sizes='100vw'
							src='/images/green-heart.png'
							width={590.23}
						/>
						<p className='text-primary-foreground absolute top-1/2 left-1/2 w-full max-w-[21.375rem] -translate-x-1/2 -translate-y-1/2 text-center text-2xl leading-[120%] tracking-[-0.02em]'>
							"And of His signs is that He created for you from yourselves mates
							that you may find tranquility in them..." <br /> - Ar-Rum:21
						</p>
					</div>
				</section>

				<section className='relative h-screen'>
					<Image
						fill
						alt='Hall'
						className='object-cover'
						src='/images/hall.jpg'
					/>
				</section>

				<section className='flex flex-col items-center gap-y-[4.5625rem] py-[9.125rem]'>
					<div className='flex flex-col gap-y-6 text-center'>
						<h3 className='text-primary font-louize-display text-[6.25rem] leading-[73%] tracking-[-0.03em]'>
							Countdown To Forever
						</h3>
						<p className='text-lg leading-[120%] tracking-[-0.02em]'>
							The celebration begins in:
						</p>
					</div>
					<CountdownTimer />
				</section>

				<section className='flex flex-col items-center gap-y-[8.4375rem] py-[9.125rem]'>
					<h3 className='text-primary font-aphrodite-slim-contextual text-[6.25rem] leading-[73%] tracking-[-0.02em]'>
						April
					</h3>
					<div className='relative'>
						<Polaroid
							classNames={{
								base: 'rotate-[-18.53deg] left-0 -translate-x-[110%] top-[32%]',
							}}
							image='/images/hall.jpg'
						/>
						<Polaroid
							classNames={{
								base: 'rotate-[18.32deg] right-0 translate-x-[110%] top-[23%]',
							}}
							image='/images/bouquet.png'
						/>
						<Polaroid
							classNames={{
								base: 'rotate-[3.45deg] left-[57%] top-[90%]',
								image: 'w-[10.8875rem] h-[8.115rem]',
							}}
							image='/images/jollof.png'
						/>
						<Calendar />
					</div>
				</section>

				<section className='flex flex-col items-center gap-y-[7.5rem] py-[9.875rem]'>
					<h3 className='text-primary font-louize-display text-[6.25rem] leading-[73%] tracking-[-0.03em]'>
						Event Details
					</h3>
					<div className='relative'>
						<svg
							fill='none'
							height='380'
							viewBox='0 0 955 380'
							width='955'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M128 0C128 11.598 137.402 21 149 21C160.598 21 170 11.598 170 0H785C785 11.598 794.402 21 806 21C817.598 21 827 11.598 827 0H937.786C936.051 2.01384 935 4.6334 935 7.5C935 13.8513 940.149 19 946.5 19C949.868 19 952.897 17.552 955 15.2451V368.754C952.897 366.447 949.867 365 946.5 365C940.149 365 935 370.149 935 376.5C935 377.721 935.192 378.896 935.544 380H827C827 368.402 817.598 359 806 359C794.402 359 785 368.402 785 380H170C170 368.402 160.598 359 149 359C137.402 359 128 368.402 128 380H17.4561C17.8084 378.896 18 377.721 18 376.5C18 370.149 12.8513 365 6.5 365C4.08744 365 1.84924 365.744 0 367.014V16.9854C1.84933 18.2551 4.08724 19 6.5 19C12.8513 19 18 13.8513 18 7.5C18 4.6334 16.9487 2.01384 15.2139 0H128Z'
								fill='#00674E'
							/>
							<line
								stroke='#F5F1E6'
								strokeDasharray='8 8'
								strokeWidth='2'
								x1='807'
								x2='807'
								y1='21'
								y2='359'
							/>
							<line
								stroke='#F5F1E6'
								strokeDasharray='8 8'
								strokeWidth='2'
								x1='150'
								x2='150'
								y1='21'
								y2='359'
							/>
						</svg>
						<div className='text-primary-foreground absolute top-1/2 left-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center'>
							<div className='flex max-w-[9.4rem] flex-1 flex-col items-center justify-center gap-y-5'>
								<span className='text-2xl leading-[100%] font-medium'>
									Date
								</span>
								<span className='font-louize-display text-[6.25rem] leading-[73%] tracking-[-0.03em]'>
									25
								</span>
								<span className='text-2xl leading-[100%] font-medium'>
									Sat, April
								</span>
							</div>
							<div className='flex flex-1 flex-col items-center gap-y-[0.875rem]'>
								<span className='text-2xl leading-[100%] tracking-[-0.02em]'>
									Venue
								</span>
								<span className='max-w-[33.25rem] text-[2.75rem] leading-[110%] tracking-[-0.02em]'>
									The Musical Village,Obafemi Awolowo way , ikorodu, Lagos
								</span>
							</div>
							<div className='flex max-w-[9.4rem] flex-1 flex-col items-center justify-center gap-y-5'>
								<span className='text-2xl leading-[100%] font-medium'>
									Time
								</span>
								<span className='font-louize-display text-[6.25rem] leading-[73%] tracking-[-0.03em]'>
									11
								</span>
							</div>
						</div>
					</div>
				</section>

				<section className='flex flex-col items-center gap-y-[7.5rem] py-[9.875rem]'>
					<h3 className='text-primary font-louize-display text-[6.25rem] leading-[73%] tracking-[-0.03em]'>
						Get Directions
					</h3>
					<div className='relative h-[34.25rem] w-full max-w-[57.625rem] overflow-hidden rounded-2xl'>
						<Image
							fill
							alt='Map'
							className='object-cover'
							src='/images/map.png'
						/>
						<div className='absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-y-6'>
							<Polaroid
								caption='Venue'
								classNames={{
									base: ' p-[0.286875rem] pb-[2.329375rem] relative',
									image: 'w-[9.125rem] h-[6.80125rem]',
								}}
								image='/images/hall.jpg'
							/>
							<Button asChild>
								<a
									href='https://www.google.com/maps?saddr=My+Location&daddr=The+Musical+Village,+JGFC%2BWJ4,+Obafemi+Awolowo+Rd,+Ikorodu,+104101,+Lagos'
									target='_blank'
								>
									Click here to get directions
								</a>
							</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
