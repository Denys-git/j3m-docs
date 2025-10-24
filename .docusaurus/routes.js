import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/j3m-docs/__docusaurus/debug',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug', '377'),
    exact: true
  },
  {
    path: '/j3m-docs/__docusaurus/debug/config',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug/config', 'c80'),
    exact: true
  },
  {
    path: '/j3m-docs/__docusaurus/debug/content',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug/content', '16c'),
    exact: true
  },
  {
    path: '/j3m-docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug/globalData', 'dee'),
    exact: true
  },
  {
    path: '/j3m-docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug/metadata', 'f6d'),
    exact: true
  },
  {
    path: '/j3m-docs/__docusaurus/debug/registry',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug/registry', 'd11'),
    exact: true
  },
  {
    path: '/j3m-docs/__docusaurus/debug/routes',
    component: ComponentCreator('/j3m-docs/__docusaurus/debug/routes', '4de'),
    exact: true
  },
  {
    path: '/j3m-docs/blog',
    component: ComponentCreator('/j3m-docs/blog', 'ac0'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/archive',
    component: ComponentCreator('/j3m-docs/blog/archive', '8b7'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/authors',
    component: ComponentCreator('/j3m-docs/blog/authors', '17f'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/j3m-docs/blog/authors/all-sebastien-lorber-articles', '910'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/authors/yangshun',
    component: ComponentCreator('/j3m-docs/blog/authors/yangshun', 'e9c'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/first-blog-post',
    component: ComponentCreator('/j3m-docs/blog/first-blog-post', '67e'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/long-blog-post',
    component: ComponentCreator('/j3m-docs/blog/long-blog-post', 'd10'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/mdx-blog-post',
    component: ComponentCreator('/j3m-docs/blog/mdx-blog-post', 'e60'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/tags',
    component: ComponentCreator('/j3m-docs/blog/tags', '4bf'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/tags/docusaurus',
    component: ComponentCreator('/j3m-docs/blog/tags/docusaurus', '526'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/tags/facebook',
    component: ComponentCreator('/j3m-docs/blog/tags/facebook', '68e'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/tags/hello',
    component: ComponentCreator('/j3m-docs/blog/tags/hello', 'c61'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/tags/hola',
    component: ComponentCreator('/j3m-docs/blog/tags/hola', '315'),
    exact: true
  },
  {
    path: '/j3m-docs/blog/welcome',
    component: ComponentCreator('/j3m-docs/blog/welcome', '938'),
    exact: true
  },
  {
    path: '/j3m-docs/markdown-page',
    component: ComponentCreator('/j3m-docs/markdown-page', 'c0a'),
    exact: true
  },
  {
    path: '/j3m-docs/search',
    component: ComponentCreator('/j3m-docs/search', 'd9a'),
    exact: true
  },
  {
    path: '/j3m-docs/docs',
    component: ComponentCreator('/j3m-docs/docs', '9c0'),
    routes: [
      {
        path: '/j3m-docs/docs',
        component: ComponentCreator('/j3m-docs/docs', '983'),
        routes: [
          {
            path: '/j3m-docs/docs',
            component: ComponentCreator('/j3m-docs/docs', 'a50'),
            routes: [
              {
                path: '/j3m-docs/docs/features/general-planning',
                component: ComponentCreator('/j3m-docs/docs/features/general-planning', '124'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/j3m-docs/docs/navigation/modules',
                component: ComponentCreator('/j3m-docs/docs/navigation/modules', '7bb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/j3m-docs/docs/navigation/overview',
                component: ComponentCreator('/j3m-docs/docs/navigation/overview', '5d3'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/j3m-docs/',
    component: ComponentCreator('/j3m-docs/', 'df4'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
