import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Alex Stanley',
  tagline: 'Software Engineer & Hardware Enthusiast',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mutexlocked.com',
  baseUrl: '/',

  // GitHub pages deployment config - update if using GitHub Pages
  organizationName: 'adstanley', // Your GitHub username
  projectName: 'portfolio', // Your repo name

  // Change to 'warn' for deployment if you have temporary broken links
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Update this to your repo or remove if not needed
          editUrl: 'https://github.com/adstanley/portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Update this to your repo or remove if not needed
          editUrl: 'https://github.com/adstanley/portfolio/tree/main/',
          // Blog best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Dark mode by default
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    // Custom image for social sharing
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Alexander Stanley',
      logo: {
        alt: 'AS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/projects', 
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/garage',
          label: 'Garage',
          position: 'left',
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          to: '/Lego',
          label: 'Lego',
          position: 'left',
        },
        {
          href: 'https://github.com/adstanley',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://linkedin.com', // Update with your LinkedIn
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Portfolio',
          items: [
            {
              label: 'Resume',
              to: '/resume',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'About Me',
              to: '/about',
            },
          ],
        },
        {
          title: 'Built With',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io/',
            },
            {
              label: 'React',
              href: 'https://reactjs.org/',
            },
            {
              label: 'TypeScript',
              href: 'https://www.typescriptlang.org/',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/adstanley',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com', // Update with your LinkedIn
            },
            {
              label: 'Email',
              href: 'mailto:adstanley@ufl.edu', // Update with your email
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com', // Update with your Twitter
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com', // Update with your Instagram
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alex Stanley. Built with ♥ @ your mothers house.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'cpp', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;