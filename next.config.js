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
  
}

module.exports = nextConfig
