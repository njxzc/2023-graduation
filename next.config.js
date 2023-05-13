/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'q.qlogo.cn'
			},
		],
	},
}

module.exports = nextConfig
