/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Image Optimization
  images: {
    // Enable Next.js Image Optimization
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    // Allow external WordPress images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'matchplugagency.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.matchplugagency.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.wordpress.com',
        pathname: '/**',
      },
    ],
  },
  
  // Production optimizations
  compress: true,
  
  // Headers for better performance
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=60, s-maxage=120',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Redirects for performance
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/news',
        permanent: true,
      },
    ]
  },

  // Experimental optimizations
  experimental: {
    optimizePackageImports: ['@radix-ui', 'lucide-react'],
  },
}

export default nextConfig
