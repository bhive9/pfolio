/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  // TODO: Change site title
  title: 'Next.js Starter Blog',
  // TODO: Change author name
  author: 'Tails Azimuth',
  // TODO: Change header title (shown in navbar)
  headerTitle: 'TailwindBlog',
  // TODO: Change site description (SEO, social cards)
  description: 'A blog created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  // TODO: Change to your production URL (e.g. https://yourname.com)
  siteUrl: 'https://tailwind-nextjs-starter-blog.vercel.app',
  // TODO: Change to your GitHub repo URL
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  // TODO: Replace with your logo (place in public/static/images/logo.png)
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  // TODO: Replace with your social banner image (1200x630 recommended)
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  // TODO: Add your Mastodon profile or remove
  mastodon: 'https://mastodon.social/@mastodonuser',
  // TODO: Add your contact email
  email: 'address@yoursite.com',
  // TODO: Add your GitHub profile
  github: 'https://github.com',
  // TODO: Add your X (Twitter) profile
  x: 'https://twitter.com/x',
  // twitter: 'https://twitter.com/Twitter',
  // TODO: Add your Facebook profile or remove
  facebook: 'https://facebook.com',
  // TODO: Add your YouTube channel or remove
  youtube: 'https://youtube.com',
  // TODO: Add your LinkedIn profile or remove
  linkedin: 'https://www.linkedin.com',
  // TODO: Add your Threads profile or remove
  threads: 'https://www.threads.net',
  // TODO: Add your Instagram profile or remove
  instagram: 'https://www.instagram.com',
  // TODO: Add your Medium profile or remove
  medium: 'https://medium.com',
  // TODO: Add your Bluesky profile or remove
  bluesky: 'https://bsky.app/',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // TODO: Configure analytics - uncomment one and add credentials to .env
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: *** // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    // TODO: Choose newsletter provider and add API keys to .env
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    // TODO: Choose comments provider (giscus, utterances, disqus) and add config to .env
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599ce...9b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
