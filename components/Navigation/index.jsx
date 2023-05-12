import Link from 'next/link'

export default function Navigation() {
	return (
		<nav className="bg-gray-400 shadow">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 justify-between">
					<div className="flex">
						<div className="flex flex-shrink-0 items-center">
							<img src="/images/logo.png" alt='南京晓庄学院'className="block h-12 w-auto lg:hidden" />
							<img src="/images/logo.png" alt='南京晓庄学院'className="hidden h-12 w-auto lg:block" />
						</div>
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<Link href="/" className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900">
								首页
							</Link>
							<Link href="/archive" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
								再见晓庄
							</Link>
							<Link href="/about" className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
								关于
							</Link>
						</div>
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
							<span className="sr-only">Open main menu</span>
							<svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
							</svg>
							<svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<div className="sm:hidden" id="mobile-menu">
				<div className="space-y-1 pb-3 pt-2">
					<Link href="/"  className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700">
						首页
					</Link>
					<Link href="/archive" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
						再见晓庄
					</Link>
					<Link href="/about" className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
						关于
					</Link>
				</div>
			</div>
		</nav>
	)
}
