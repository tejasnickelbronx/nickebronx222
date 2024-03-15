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
		{
		source: '/portfolio-cafe-levantine',
		destination: '/portfolios/cafe-levantine/546',
		permanent: true,
		},
		{
		source: '/portfolio-rossen',
		destination: '/portfolios/rossen-landscape/579',
		permanent: true,
		},
		{
		source: '/portfolio-brown-law',
		destination: '/portfolios/brown-law/628',
		permanent: true,
		},
		{
		source: '/portfolio-z-family-law',
		destination: '/portfolios/z-family-law/661',
		permanent: true,
		},
		{
		source: '/portfolio-main-event-catering',
		destination: '/portfolios/main-event-catering/588',
		permanent: true,
		},
		{
		source: '/portfolio-joe-mechlinski',
		destination: '/portfolios/joe-mechlinski/571',
		permanent: true,
		},
		{
		source: '/portfolio-milkify',
		destination: '/portfolios/milkify/660',
		permanent: true,
		},
		{
		source: '/portfolio-3p-secured',
		destination: '/portfolios/3p-secured/564',
		permanent: true,
		},
		{
		source: '/portfolio-w3ar',
		destination: '/portfolios/w3ar/602',
		permanent: true,
		},
		{
		source: '/boxd-eats',
		destination: '/portfolios/boxs-eats/615',
		permanent: true,
		},
		{
		source: '/emerald',
		destination: '/portfolios/emerald/609',
		permanent: true,
		},
		{
		source: '/about-us',
		destination: '/about',
		permanent: true,
		},
		{
		source: '/blog',
		destination: '/blogs',
		permanent: true,
		},
		{
		source: '/blog/google-ip-updates-bring-changes-to-the-marketing-landscape',
		destination: '/blogs/google-ip-updates-bring-changes-to-the-marketing-landscape/891',
		permanent: true,
		},
		{
		source: '/blog/marketing-to-gen-z-7-strategies-for-success-0',
		destination: '/blogs/marketing-to-gen-z-7-strategies-for-success/914',
		permanent: true,
		},
		{
		source: '/blog/how-to-speak-gen-z-the-ultimate-slang-word-list-revealed',
		destination: '/blogs/how-to-speak-gen-z-the-ultimate-slang-word-list-revealed/902',
		permanent: true,
		},
		{
		source: '/blog/authenticity-vs-ai-can-ai-help-business-owners-maximize-time',
		destination: '/blogs/authenticity-vs-ai-can-ai-help-business-owners-maximize-time/898',
		permanent: true,
		},
		{
		source: '/blog/how-to-choose-the-perfect-color-for-your-brand-personality',
		destination: '/blogs/how-to-choose-the-perfect-color-for-your-brand-personality/896',
		permanent: true,
		},
		{
		source: '/blog/your-linkedin-persona-best-practices-for-business-owners',
		destination: '/blogs/your-linkedin-persona-best-practices-for-business-owners/908',
		permanent: true,
		},
		{
		source: '/blog/the-rising-influence-of-content-creators',
		destination: '/blogs/the-rising-influence-of-content-creators/906',
		permanent: true,
		},
		{
		source: '/blog/5-common-misconceptions-about-short-form-video',
		destination: '/blogs/5-common-misconceptions-about-short-form-video/904',
		permanent: true,
		},
		{
		source: '/blog/finding-balance-between-social-media-and-mental-health',
		destination: '/blogs/finding-balance-between-social-media-and-mental-health/910',
		permanent: true,
		},
		{
		source: '/blog/how-to-prove-the-value-of-brand-awareness',
		destination: '/blogs',
		permanent: true,
		},
		{
		source: '/blog',
		destination: '/blogs/finding-balance-between-social-media-and-mental-health/910',
		permanent: true,
		},
		{
		source: '/blog/how-to-prove-the-value-of-brand-awareness',
		destination: '/blogs/ways-how-to-measure-brand-awareness/918',
		permanent: true,
		},
		{
		source: '/blog/prototyping-for-client-success-enhancing-customer-experiences-with-figma',
		destination: '/blogs/prototyping-for-client-success-enhancing-customer-experiences-with-figma/916',
		permanent: true,
		},
		{
		source: '/blog/demystifying-design-file-types-a-comprehensive-guide',
		destination: '/blogs/demystifying-design-file-types-a-comprehensive-guide/922',
		permanent: true,
		},
		{
		source: '/blog/color-psychology-in-design',
		destination: '/blogs/color-psychology-in-design/920',
		permanent: true,
		},
		{
		source: '/blog/the-key-to-great-logo-design',
		destination: '/blogs/the-key-to-great-logo-design/997',
		permanent: true,
		},
		{
		source: '/blog/welcome-to-threads-instagrams-twitter-alternative',
		destination: '/blogs/welcome-to-threads-instagrams-twitter-alternative/933',
		permanent: true,
		},
		{
		source: '/blog/how-to-balance-fun-and-business-on-social-media',
		destination: '/blogs/how-to-balance-fun-and-business-on-social-media/929',
		permanent: true,
		},
		{
		source: '/blog/9-types-of-logos-how-to-use-them',
		destination: '/blogs/9-types-of-logos-how-to-use-them/927',
		permanent: true,
		},
		{
		source: '/blog/the-key-role-of-brand-voice-in-marketing',
		destination: '/blogs/the-key-role-of-brand-voice-in-marketing/925',
		permanent: true,
		},
		{
		source: '/blog/how-to-get-qualified-leads',
		destination: '/blogs/how-to-get-qualified-leads/939',
		permanent: true,
		},
		{
		source: '/blog/reviews-really-do-matter-boost-trust-and-credibility-for-your-brand',
		destination: '/blogs/customer-reviews-do-matter-boost-trust-and-credibility-for-your-brand/937',
		permanent: true,
		},
		{
		source: '/blog/why-companies-should-stand-as-lgbtq-allies-during-pride-month',
		destination: '/blogs/why-companies-should-stand-as-lgbtq-allies-during-pride-month/935',
		permanent: true,
		},
		{
		source: '/blog/design-trends-is-it-a-good-or-bad-thing-for-your-brand',
		destination: '/blogs/design-trends-is-it-a-good-or-bad-thing-for-your-brand/941',
		permanent: true,
		},
		{
		source: '/blog/think-like-your-customers-not-just-about-them',
		destination: '/blogs/think-like-your-customers-not-just-about-them/945',
		permanent: true,
		},
		{
		source: '/blog/why-its-important-to-establish-a-personal-brand',
		destination: '/blogs/why-its-important-to-establish-a-personal-brand/947',
		permanent: true,
		},
		{
		source: '/blog/how-to-build-a-b2b-online-community',
		destination: '/blogs/how-to-build-a-b2b-online-community/953',
		permanent: true,
		},
		{
		source: '/blog/how-to-humanize-your-b2b-social-media-presence',
		destination: '/blogs/how-to-humanize-your-b2b-social-media-presence/956',
		permanent: true,
		},
		{
		source: '/blog/incorporating-illustration-into-your-marketing',
		destination: '/blogs/incorporating-illustration-into-your-marketing/958',
		permanent: true,
		},
		{
		source: '/blog/from-likes-to-leads-transforming-your-social-media-presence',
		destination: '/blogs/from-likes-to-leads-transforming-your-social-media-presence/960',
		permanent: true,
		},
		{
		source: '/blog/the-importance-of-typography-in-design',
		destination: '/blogs/the-importance-of-typography-in-design/962',
		permanent: true,
		},
		{
		source: '/blog/using-hubspot-for-your-data-driven-marketing-strategy',
		destination: '/blogs/using-hubspot-for-your-data-driven-marketing-strategy/964',
		permanent: true,
		},
		{
		source: '/blog/why-brand-guidelines-are-essential-for-your-business',
		destination: '/blogs/why-brand-guidelines-are-essential-for-your-business/968',
		permanent: true,
		},
		{
		source: '/blog/hit-or-miss-rebrands',
		destination: '/blogs/hit-or-miss-rebrands/970',
		permanent: true,
		},
		{
		source: '/blog/5-steps-to-building-your-brand-on-social-media',
		destination: '/blogs/5-steps-to-building-your-brand-on-social-media/972',
		permanent: true,
		},
		{
		source: '/blog/how-brands-can-master-authenticity-in-2023',
		destination: '/blogs/how-brands-can-master-authenticity-in-2023/974',
		permanent: true,
		},
		{
		source: '/blog/branding-marketing-advertising-whats-the-difference',
		destination: '/blogs/branding-marketing-advertising-whats-the-difference/976',
		permanent: true,
		},
		{
		source: '/blog/boost-your-business-how-to-create-a-great-branding-strategy-asap',
		destination: '/blogs/boost-your-business-how-to-create-a-great-branding-strategy-asap/980',
		permanent: true,
		},
		{
		source: '/blog/put-your-money-where-your-marketing-is-when-to-spend',
		destination: '/blogs/put-your-money-where-your-marketing-is-when-to-spend/982',
		permanent: true,
		},
		{
		source: '/blog/canva-vs-illustrator-which-to-choose-nickelbronx',
		destination: '/blogs/canva-vs-illustrator-which-to-choose/986',
		permanent: true,
		},
		{
		source: '/blog/top-mistakes-when-posting-instagram-reels',
		destination: '/blogs/top-six-mistakes-when-posting-instagram-reels/984',
		permanent: true,
		},
		{
		source: '/blog/boost-your-business-how-to-create-a-great-branding-strategy-asap-0',
		destination: '/blogs/boost-your-business-how-to-create-a-great-branding-strategy-asap/980',
		permanent: true,
		},
		{
		source: '/blog/my-hot-take-on-the-commanders',
		destination: '/blogs/my-hot-take-on-the-commanders/991',
		permanent: true,
		},
		{
		source: '/blog/how-figma-can-change-the-way-you-work',
		destination: '/blogs/how-figma-can-change-the-way-you-work/993',
		permanent: true,
		},
		{
		source: '/brand-identity',
		destination: '/services/brand-visual-identity/413',
		permanent: true,
		},
		{
		source: '/web-design',
		destination: '/services/website-development/417',
		permanent: true,
		},
		{
		source: '/content-and-messaging',
		destination: '/services/content-and-messaging/420',
		permanent: true,
		},
		{
		source: '/blog',
		destination: '/blogs',
		permanent: true,
		},
		{
		source: '/social-media',
		destination: '/services/social-media/418',
		permanent: true,
		},
		{
		source: '/marketing-strategy',
		destination: '/services/marketing-strategy/415',
		permanent: true,
		},
		{
		source: '/search-engine-marketing',
		destination: '/services/search-engine-marketing/432',
		permanent: true,
		},
		{
		source: '/demand-and-lead-gen',
		destination: '/sub-service/lead-generation.',
		permanent: true,
		},
		{
		source: '/contact-us',
		destination: '/contact',
		permanent: true,
		},
		]
	  }
  
}

module.exports = nextConfig
