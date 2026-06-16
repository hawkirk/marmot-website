/**
 * Site-wide constants. Edit these in one place; every component pulls from here.
 */

export const SITE = {
  name: 'Marmot',
  domain: 'marmotmanuscript.com',
  url: 'https://marmotmanuscript.com',
  tagline: 'Write your novel in pure markdown.',
  description:
    'A minimalist macOS app for writing novels. Plain Markdown files, distraction-free editor, one-click submission-ready manuscript PDFs.',
  supportEmail: 'hello@marmotmanuscript.com',
} as const;

export const APP_STORE = {
  /**
   * Mac App Store URL. The nav button and hero badge both read this.
   */
  url: 'https://apps.apple.com/us/app/marmot-manuscript-writing-app/id6769186525',
} as const;

export const NAV_LINKS = [
  { href: '/help', label: 'Help' },
] as const;

/**
 * Social handles + URLs surfaced on the /help page. Update the handles/URLs
 * once you have real accounts; the page renders whatever is here.
 */
export const SOCIAL = {
  x: {
    handle: '@marmotapp',
    url: 'https://x.com/marmotapp',
  },
  bluesky: {
    handle: '@marmot.bsky.social',
    url: 'https://bsky.app/profile/marmot.bsky.social',
  },
  reddit: {
    handle: 'r/marmotapp',
    url: 'https://reddit.com/r/marmotapp',
  },
} as const;
