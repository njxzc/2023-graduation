'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
	const [activeLink, setActiveLink] = useState('/')
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const handleLinkClick = (path) => {
		setActiveLink(path)
		setMobileMenuOpen(false)
	}

	return (
		<nav className="bg-gray-800 shadow">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex flex-shrink-0 items-center">
							<img src="/images/logo.png" alt='南京晓庄学院' className="block h-12 w-auto lg:hidden" />
							<img src="/images/logo.png" alt='南京晓庄学院' className="hidden h-12 w-auto lg:block" />
						</div>
						<div className="hidden sm:ml-12 sm:flex sm:space-x-8">
							<Link href="/" onClick={() => handleLinkClick('/')} className={`inline-flex items-center border-b-2 ${activeLink === '/' ? 'border-indigo-500' : 'border-transparent'} px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}>
								时光轴
							</Link>
							<Link href="/archive" onClick={() => handleLinkClick('/archive')} className={`inline-flex items-center border-b-2 ${activeLink === '/archive' ? 'border-indigo-500' : 'border-transparent'} px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}>
								再见晓庄
							</Link>
							<Link href="/about" onClick={() => handleLinkClick('/about')} className={`inline-flex items-center border-b-2 ${activeLink === '/about' ? 'border-indigo-500' : 'border-transparent'} px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}>
								关于
							</Link>
						</div>
					</div>
					<div className="flex justify-items-center items-center text-sm font-sans text-white">南晓2023届19计科卓工毕业留念</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button type="button" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
							<svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			{isMobileMenuOpen && (
				<div className="sm:hidden" id="mobile-menu">
					<div className="space-y-1 pb-3 pt-2">
						<Link href="/" onClick={() => handleLinkClick('/')} className={`block border-l-4 ${activeLink === '/' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500'} py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}>
							时光轴
						</Link>
						<Link href="/archive" onClick={() => handleLinkClick('/archive')} className={`block border-l-4 ${activeLink === '/archive' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500'} py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}>
							再见晓庄
						</Link>
						<Link href="/about" onClick={() => handleLinkClick('/about')} className={`block border-l-4 ${activeLink === '/about' ? 'border-indigo-500 bg-indigo-50 text-indigo-700' : 'border-transparent text-gray-500'} py-2 pl-3 pr-4 text-base font-medium hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700`}>
							关于
						</Link>
					</div>
				</div>)}
		</nav>
	)
}
