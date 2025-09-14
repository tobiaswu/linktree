export type LinkKind =
  | 'youtube'
  | 'x'
  | 'linkedin'
  | 'instagram'
  | 'github'
  | 'email'
  | 'website';

export type ProfileLink = {
  id: string;
  kind: LinkKind;
  label: string;
  subtitle?: string;
  url: string;
  order: number;
};

export type Profile = {
  title: string;
  name: string;
  introduction: string;
  email: string;
  profileImageUrl?: string;
  links: ProfileLink[];
};

export const profile: Profile = {
  title: 'Tobias Wupperfeld',
  name: 'Tobias Wupperfeld',
  introduction:
    "Hi, I'm Tobias. I build software with AI. Contact me below 👇",
  email: 'tobias@wupperfeld.org',
  profileImageUrl: 'tobias-head.webp',
  links: [
    {
      id: 'youtube',
      kind: 'youtube',
      label: 'YouTube',
      subtitle: 'Visit my YouTube channel',
      url: 'https://youtube.com/@madebyagents',
      order: 1,
    },
    {
      id: 'x',
      kind: 'x',
      label: 'X',
      subtitle: 'Follow me on X',
      url: 'https://x.com/tobiaswup',
      order: 2,
    },
    {
      id: 'linkedin',
      kind: 'linkedin',
      label: 'LinkedIn',
      subtitle: 'Connect with me on LinkedIn',
      url: 'https://www.linkedin.com/in/tobias-wupperfeld',
      order: 3,
    },
    {
      id: 'github',
      kind: 'github',
      label: 'GitHub',
      subtitle: 'Browse my code on GitHub',
      url: 'https://github.com/tobiaswu',
      order: 5,
    },
    {
      id: 'email',
      kind: 'email',
      label: 'Email',
      subtitle: 'Send me an email',
      url: 'mailto:tobias@wupperfeld.org',
      order: 6,
    },
    {
      id: 'website-mba',
      kind: 'website',
      label: 'Made By Agents',
      subtitle: 'Visit my AI development agency',
      url: 'https://madebyagents.com',
      order: 7,
    },
    {
      id: 'website-news',
      kind: 'website',
      label: 'The Agent Roundup',
      subtitle: 'Subscribe to my newsletter',
      url: 'https://agentroundup.com/subscribe',
      order: 8,
    },
    {
      id: 'website-tw',
      kind: 'website',
      label: 'Profile Website',
      subtitle: 'Visit my profile',
      url: 'https://wupperfeld.org',
      order: 9,
    },
  ],
};
