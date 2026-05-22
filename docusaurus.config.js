// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DS Academic',
  tagline: 'Learn concepts. Not memorization.',
  favicon: 'img/favicon.ico',

  // ✅ Set this to your actual Vercel URL or custom domain
  url: 'https://ds-academic.vercel.app',
  baseUrl: '/',

  organizationName: 'dsdipu',
  projectName: 'ds-academic',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dsdipu/ds-academic/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: false,
        },
        blog: {
          showReadingTime: true,
          onInlineAuthors: 'ignore',
          editUrl: 'https://github.com/dsdipu/ds-academic/edit/main/',
          blogTitle: 'DS Academic Blog',
          blogDescription: 'Study tips, roadmaps, and updates from DS Academic',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      }),
    ],
  ],

  themeConfig:
    ({
      image: 'img/social/social-card.svg',

      metadata: [
        { name: 'keywords', content: 'html, css, javascript, docker, cse, exam prep, web development' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],

      announcementBar: {
        id: 'site_launch',
        content: '🎓 Welcome to DS Academic! New notes added every week. <a href="/docs">Browse Notes →</a>',
        backgroundColor: '#1A5F7A',
        textColor: '#ffffff',
        isCloseable: true,
      },

      navbar: {
        title: 'DS Academic',
        logo: {
          alt: 'DS Academic Logo',
          src: 'img/logo/ds-academic-logo.svg',
        },
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: '📚 Notes',
          },
          { to: '/youtube', label: '▶ Videos', position: 'left' },
          { to: '/roadmap', label: '🗺️ Roadmap', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/dashboard', label: '📊 My Progress', position: 'right' },
          {
            href: 'https://dsdipu.vercel.app',
            label: '← Portfolio',
            position: 'right',
          },
          {
            href: 'https://github.com/dsdipu/ds-academic',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              { label: '📚 Notes', to: '/docs' },
              { label: '▶ YouTube', to: '/youtube' },
              { label: '🗺️ Roadmap', to: '/roadmap' },
              { label: '📝 Blog', to: '/blog' },
            ],
          },
          {
            title: 'Subjects',
            items: [
              { label: 'HTML', to: '/docs/web-technologies/html/html-introduction' },
              { label: 'CSS', to: '/docs/web-technologies/css/css-selectors' },
              { label: 'JavaScript', to: '/docs/web-technologies/javascript/js-variables' },
              { label: 'Docker', to: '/docs/web-technologies/docker/docker-intro' },
            ],
          },
          {
            title: 'Connect',
            items: [
              { label: '🌐 Portfolio', href: 'https://dsdipu.vercel.app' },
              { label: 'GitHub', href: 'https://github.com/dsdipu' },
              { label: 'LinkedIn', href: 'https://linkedin.com/in/dsdipu' },
              { label: 'YouTube', href: 'https://youtube.com/@dsdipu' },
            ],
          },
          {
            title: 'Site',
            items: [
              { label: '📊 Dashboard', to: '/dashboard' },
              { label: '📖 Exam Prep', to: '/docs/exam-prep/how-to-write-answers' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DS Academic. Built for students, by a student. | v1.0.0`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['docker', 'bash', 'diff', 'json', 'yaml'],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: false,
        },
      },

      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
    }),
};

module.exports = config;
