import {
  CompanyName,
  CompanyPhoneNumber,
  FACEBOOK_BUSINESS_URL,
  FULL_BUSINESS_URL,
  INSTAGRAM_BUSINESS_URL,
  LINKEDIN_BUSINESS_URL,
} from '../Constants';

// Home page
export const homePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: CompanyName,
  url: FULL_BUSINESS_URL,
  description: `${CompanyName} offers expert web and circuit design services in the UK.`,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${FULL_BUSINESS_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
  sameAs: [
    `${FACEBOOK_BUSINESS_URL}`,
    `${INSTAGRAM_BUSINESS_URL}`,
    `${LINKEDIN_BUSINESS_URL}`,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `${CompanyPhoneNumber}`,
    contactType: 'Customer Service',
    areaServed: 'GB',
    availableLanguage: ['English'],
  },
};

export const homePageAdditionalMeta = [
  { property: 'og:title', content: `Welcome to ${CompanyName}` },
  {
    property: 'og:description',
    content:
      'Explore our simulations and tools for optimal gaming experiences.',
  },
  { property: 'og:image', content: `${FULL_BUSINESS_URL}/brand/logo.png` },
  { property: 'og:url', content: FULL_BUSINESS_URL },
  { name: 'twitter:card', content: 'summary_large_image' },
  { name: 'twitter:title', content: `Welcome to ${CompanyName}` },
  {
    name: 'twitter:description',
    content: 'Discover simulations and tools for optimal gaming experiences.',
  },
  { name: 'twitter:image', content: `${FULL_BUSINESS_URL}/brand/logo.png` },
];
