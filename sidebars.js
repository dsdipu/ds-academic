/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: '🏠 Welcome',
    },
    {
      type: 'category',
      label: '🌐 Web Technologies',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Web Technologies',
        description: 'Master HTML, CSS, JavaScript, and Docker from scratch to exam-ready.',
        slug: '/web-technologies',
      },
      items: [
        {
          type: 'category',
          label: '📄 HTML',
          collapsed: false,
          items: [
            'web-technologies/html/html-introduction',
            'web-technologies/html/html-elements',
            'web-technologies/html/html-forms',
            'web-technologies/html/html-semantic',
            'web-technologies/html/html-common-mistakes',
          ],
        },
        {
          type: 'category',
          label: '🎨 CSS',
          collapsed: true,
          items: [
            'web-technologies/css/css-selectors',
            'web-technologies/css/css-box-model',
            'web-technologies/css/css-flexbox',
            'web-technologies/css/css-grid',
            'web-technologies/css/css-responsive',
            'web-technologies/css/css-mistakes',
          ],
        },
        {
          type: 'category',
          label: '⚡ JavaScript',
          collapsed: true,
          items: [
            'web-technologies/javascript/js-variables',
            'web-technologies/javascript/js-functions',
            'web-technologies/javascript/js-dom',
            'web-technologies/javascript/js-events',
            'web-technologies/javascript/js-es6',
            'web-technologies/javascript/js-common-errors',
          ],
        },
        {
          type: 'category',
          label: '🐳 Docker',
          collapsed: true,
          items: [
            'web-technologies/docker/docker-intro',
            'web-technologies/docker/docker-commands',
            'web-technologies/docker/dockerfile',
            'web-technologies/docker/docker-compose',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '📝 Exam Preparation',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Exam Preparation',
        description: 'Strategic guides for writing better exam answers and scoring higher.',
        slug: '/exam-prep',
      },
      items: [
        'exam-prep/how-to-write-answers',
        'exam-prep/common-exam-questions',
        'exam-prep/time-management',
      ],
    },
  ],
};

module.exports = sidebars;
