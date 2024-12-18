import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ protocol: 'http', hostname: 'localhost', port: '3002' }]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'http://localhost:3002/uploads/:path*'
			}
		]
	}
}

export default nextConfig
