'use client';

import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react';

import * as motion from 'motion/react-client';

const TOTAL_RIBBON_FRAMES = 192;

export const PreloaderContext = createContext(false);

export function usePreloaderReady() {
	return useContext(PreloaderContext);
}

const getRibbonFramePath = (index: number) => {
	const filename = `Scroll trigger sequence_${String(index).padStart(5, '0')}.png`;

	return `/images/ribbon/${encodeURIComponent(filename)}`;
};

async function loadGLBModel(): Promise<void> {
	const { GLTFLoader } = await import(
		'three/examples/jsm/loaders/GLTFLoader.js'
	);
	const loader = new GLTFLoader();

	await loader.loadAsync('/models/diamond_engagement_ring.glb');
}

function loadRibbonFrames(
	onProgress: (loaded: number, total: number) => void,
): Promise<void> {
	return new Promise((resolve) => {
		const state = { loaded: 0 };
		const total = TOTAL_RIBBON_FRAMES;

		const checkComplete = () => {
			state.loaded += 1;
			onProgress(state.loaded, total);

			if (state.loaded >= total) {
				resolve();
			}
		};

		for (let i = 0; i < total; i++) {
			const img = new Image();

			img.onload = checkComplete;
			img.onerror = checkComplete;
			img.src = getRibbonFramePath(i);
		}
	});
}

export interface PreloaderProps {
	children: React.ReactNode;
}

export default function Preloader({ children }: PreloaderProps) {
	const [isReady, setIsReady] = useState(false);
	const [progress, setProgress] = useState(0);

	const updateProgress = useCallback(
		(modelDone: boolean, ribbonLoaded: number, ribbonTotal: number) => {
			const modelWeight = 35;
			const ribbonWeight = 65;
			const ribbonProgress = ribbonTotal > 0 ? ribbonLoaded / ribbonTotal : 0;
			const total =
				(modelDone ? modelWeight : 0) + ribbonWeight * ribbonProgress;

			setProgress(Math.min(100, Math.round(total)));
		},
		[],
	);

	useEffect(() => {
		let ribbonLoaded = 0;
		let modelDone = false;

		const onRibbonProgress = (loaded: number, total: number) => {
			ribbonLoaded = loaded;
			updateProgress(modelDone, loaded, total);
		};

		Promise.all([
			loadGLBModel().then(() => {
				modelDone = true;
				updateProgress(true, ribbonLoaded, TOTAL_RIBBON_FRAMES);
			}),
			loadRibbonFrames(onRibbonProgress),
		])
			.then(() => {
				setProgress(100);
				// Brief moment to show 100% before transitioning
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						setIsReady(true);
					});
				});
			})
			.catch(() => {
				setIsReady(true);
			});
	}, [updateProgress]);

	return (
		<>
			<motion.div
				animate={{
					opacity: isReady ? 0 : 1,
					pointerEvents: isReady ? 'none' : 'auto',
				}}
				className='bg-primary text-primary-foreground fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 transition-opacity'
				initial={false}
				transition={{ duration: 0.6, ease: 'easeInOut' }}
			>
				<div className='flex flex-col items-center gap-6'>
					<span className='font-louize-display text-4xl tracking-[-0.03em] md:text-5xl'>
						N&Q
					</span>
					<div className='bg-primary-foreground/20 h-1 w-48 overflow-hidden rounded-full'>
						<motion.div
							animate={{ width: `${String(progress)}%` }}
							className='bg-primary-foreground h-full'
							transition={{ duration: 0.3, ease: 'easeOut' }}
						/>
					</div>
					<span className='text-primary-foreground/80 text-sm'>
						{progress}%
					</span>
				</div>
			</motion.div>
			<PreloaderContext.Provider value={isReady}>
				<motion.div
					animate={{
						opacity: isReady ? 1 : 0,
						pointerEvents: isReady ? 'auto' : 'none',
					}}
					className={isReady ? '' : 'pointer-events-none'}
					initial={false}
					transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
				>
					{children}
				</motion.div>
			</PreloaderContext.Provider>
		</>
	);
}
