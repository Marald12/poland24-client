import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [{ protocol: 'https', hostname: 'poland24-server-production.up.railway.app', port: '3000' }]
	},
	async rewrites() {
		return [
			{
				source: '/uploads/:path*',
				destination: 'https://poland24-server-production.up.railway.app/uploads/:path*'
			}
		]
	}
}

export default nextConfig
