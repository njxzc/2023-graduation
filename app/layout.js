import './globals.css'
import '@/public/css/APlayer.min.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: '南晓2023届19计科卓工毕业留念',
	description: '南晓2023届19计科卓工毕业留念',
	keywords: '南京晓庄学院,2023届,毕业留念,19计科卓工',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navigation />
				{children}
				<Footer />
				<Script src="/js/APlayer.min.js" strategy="beforeInteractive" />
			</body>
		</html>
	)
}
