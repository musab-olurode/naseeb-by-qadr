import '@/styles/globals.css';
import Providers from '@/app/providers';
import { cn } from '@/lib/utils';

import TailwindBreakpointIndicator from '@/components/common/tailwind-breakpoint-indicator';
import { Toaster } from '@/components/ui/sonner';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

// PP Neue Montreal
const fontSans = localFont({
	src: [
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Thin.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Book.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Regular.woff2',
			weight: '450',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Medium.woff2',
			weight: '530',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-SemiBold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Bold.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-ThinItalic.woff2',
			weight: '200',
			style: 'italic',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-LightItalic.woff2',
			weight: '300',
			style: 'italic',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-BookItalic.woff2',
			weight: '400',
			style: 'italic',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-Italic.woff2',
			weight: '450',
			style: 'italic',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-MediumItalic.woff2',
			weight: '530',
			style: 'italic',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-SemiBoldItalic.woff2',
			weight: '700',
			style: 'italic',
		},
		{
			path: '../../public/fonts/pp-neue-montreal/PPNeueMontreal-BoldItalic.woff2',
			weight: '800',
			style: 'italic',
		},
	],
	variable: '--font-sans',
});

// Aphrodite Slim Contextual
const fontAphroditeSlimContextual = localFont({
	src: [
		{
			path: '../../public/fonts/aphrodite-slim-contextual/Aphrodite Slim Contextual.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-aphrodite-slim-contextual',
});

// Arabic Typesetting
const fontArabicTypesetting = localFont({
	src: [
		{
			path: '../../public/fonts/arabic-typesetting/Arabic Typesetting Regular.ttf',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-arabic-typesetting',
});

// Louize Display
const fontLouizeDisplay = localFont({
	src: [
		{
			path: '../../public/fonts/louize-display/Louize Display.woff2',
			weight: '400',
			style: 'normal',
		},
	],
	variable: '--font-louize-display',
});

export const metadata: Metadata = {
	title: 'Nextjs and Nestjs scaffold',
	description: 'Nextjs and Nestjs fullstack scaffold',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html suppressHydrationWarning lang='en'>
			<body
				suppressHydrationWarning
				className={cn(
					'bg-primary-foreground min-h-screen bg-[url("/images/page-bg.png")] bg-cover bg-fixed bg-top bg-no-repeat font-sans antialiased',
					fontSans.variable,
					fontAphroditeSlimContextual.variable,
					fontArabicTypesetting.variable,
					fontLouizeDisplay.variable,
				)}
			>
				<TailwindBreakpointIndicator />
				<Providers>{children}</Providers>
				<Toaster />
			</body>
		</html>
	);
}
