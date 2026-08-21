// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/vsDark');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Astria documentation',
  tagline: 'Fine-tuning and high quality image generation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.astria.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'astriaai', // Usually your GitHub org/user name.
  projectName: 'astria-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    'docusaurus-plugin-image-zoom',
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      hashed: true,
      indexBlog: false,
    }],
    // Mirror the canonical /llms.txt (from static/) to /docs/llms.txt so it is
    // reachable under the docs path as well. Single source of truth is
    // static/llms.txt — this copy is regenerated on every build.
    function llmsTxtMirrorPlugin() {
      return {
        name: 'llms-txt-mirror',
        async postBuild({ outDir }) {
          const fs = require('fs');
          const path = require('path');
          const src = path.join(outDir, 'llms.txt');
          const destDir = path.join(outDir, 'docs');
          fs.mkdirSync(destDir, { recursive: true });
          fs.copyFileSync(src, path.join(destDir, 'llms.txt'));
        },
      };
    },
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
          async sidebarItemsGenerator({
            defaultSidebarItemsGenerator,
            ...args
          }) {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            const archivedDocIds = [
              'features/faceid',
              'features/tiled-upscale',
              'features/lcm',
              'features/backend-v1',
              'features/multiperson',
              'features/face-swap',
              'use-cases/virtual-try-on',
              'use-cases/controlnet',
              'use-cases/product-shots',
              'use-cases/upscale',
              'use-cases/masked-portraits',
              'use-cases/sdxl-training',
              'api/sdxl-api',
              'api/themes/create',
              'use-cases/finetuning-guide',
              'use-cases/room-redesign',
              'use-cases/toonify',
              'use-cases/faq',
            ];
            const archivedDocIdSet = new Set(archivedDocIds);

            const removeArchivedDocs = (items) => items
              .filter((item) => item.type !== 'doc' || !archivedDocIdSet.has(item.id))
              .map((item) => item.type === 'category'
                ? {...item, items: removeArchivedDocs(item.items)}
                : item)
              .filter((item) => item.type !== 'category' || item.items.length > 0);

            return [
              ...removeArchivedDocs(sidebarItems),
              {
                type: 'category',
                label: 'Archived',
                collapsed: true,
                items: archivedDocIds.map((id) => ({type: 'doc', id})),
              },
            ];
          },
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-S3TGRCPBP8',
          anonymizeIP: false, // Should IPs be anonymized?
        }
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // algolia: {
      //   appId: 'QYIZW7J3JD',
      //   apiKey: 'b081f0839bafa96db0c0070a017204fb',
      //   indexName: 'docs_astria_ai_qyizw7j3jd_pages',
      // },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      image: 'img/high-quality-finetuning.jpg',
      navbar: {
        title: 'Astria documentation',
        logo: {
          alt: 'Astria',
          src: 'img/logo@2x.png',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Use cases',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.astria.ai/',
            label: 'Home',
            // position: 'right',
          },
          {
            href: 'https://blog.astria.ai/',
            label: 'Blog',
            // position: 'right',
          },
          {
            href: 'https://www.astria.ai/articles',
            label: 'Articles',
            // position: 'right',
          },
          {
            href: 'https://github.com/astriaai/headshots-starter',
            label: 'Headshots open-source app',
            // position: 'right',
          },
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Use cases',
                to: '/docs/category/use-cases',
              },
              {
                label: 'Features',
                to: '/docs/category/features',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/MtW9gBgsMX',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Astria_AI',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Gallery',
                to: 'https://www.astria.ai/gallery',
              },
              {
                label: 'Community examples',
                href: 'https://astria.ai/community',
              },
              {
                label: 'Home',
                href: 'https://astria.ai/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Astria, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
