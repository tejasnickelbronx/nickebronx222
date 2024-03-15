/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
      remotePatterns:[
        {
          protocol:'https',
          hostname:  'nickelbronx1.wpenginepowered.com',
          port: '',
          pathname: '/**'

        }
      ]

  },
  	transpilePackages: ['gsap'],
	async redirects() {
		return [
		  {
			source: '/portfolio',
			destination: '/portfolios',
			permanent: true,
		  },
		]
	  }
  
}

module.exports = nextConfig
