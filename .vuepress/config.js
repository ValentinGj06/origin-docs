module.exports = {
    description: 'Origin is an app made in Laravel, JavaScript(jQuery & VueJS)',
    head: [
      ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/images/favicons/apple-touch-icon.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicons/favicon-32x32.png"}],
      ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicons/favicon-16x16.png"}],
      ['link', { rel: "manifest", href: "/images/favicons/site.webmanifest"}],
      ['link', { rel: "mask-icon", href: "/images/favicons/safari-pinned-tab.svg", color: "#5851d8"}],
      ['link', { rel: "shortcut icon", href: "/images/favicons/favicon.ico"}],
      ['meta', { name: "msapplication-TileColor", content: "#ffffff"}],
      ['meta', { name: "msapplication-config", content: "/images/favicons/browserconfig.xml"}],
      ['meta', { name: "theme-color", content: "#ffffff"}],
    ],
    themeConfig: {
        logo: '/images/origin-logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Webmin', link: 'https://192.168.1.197:10000' },
            { text: 'Website', link: 'http://192.168.1.197/rm/' },
            // {
            //     text: 'Languages',
            //     items: [
            //       { text: 'English', link: '/language/english/' },
            //     ]
            // }
        ],
        sidebar: [
            '/',
            '/installation.md',
            {
                title: 'User Guide',
                collapsable: false,
                children: [
                  '/guide/dashboard.md',
                  '/guide/access.md',
                  '/guide/clients.md',
                ]
            },
            '/api-documentation.md',
            {
                title: 'Developer Guide',
                collapsable: false,
                children: [
                '/guide/installation.md',
                '/guide/routes.md',
                '/guide/backend.md',
                '/guide/frontend.md',
                '/guide/database.md',
                '/guide/access-control.md',
                ]
            },
            
        ]
    },
    plugins: [
        // you can use this plugin multiple times
        [
          'vuepress-plugin-container',
          {
            type: 'wrapper',
            defaultTitle: '',
          },
        ],
        [
          'vuepress-plugin-zooming',
          {
            delay: 1000,
            options: {
              bgColor: 'black',
              zIndex: 10000,
            },
          },
        ]
    ],
    dest: './dist'
}