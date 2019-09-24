/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

module.exports = {
    title:   "Konduit",
    tagline: "...",

    url:     "https://konduit.io",
    baseUrl: "/",

    projectName:      "konduit-io.github.io",
    organizationName: "konduit-io",

    headerLinks: [
        {doc: 'doc1', label: 'Docs'},
        {doc: 'doc4', label: 'API'},
        {page: 'help', label: 'Help'},
        {blog: true, label: 'Blog'},
    ],

    users,

    headerIcon: "img/favicon.ico",
    footerIcon: "img/favicon.ico",
    favicon:    "img/favicon.ico",

    colors: {
        primaryColor:   "#ad527e",
        secondaryColor: "#793958",
    },

    copyright: `Copyright © ${new Date().getFullYear()}`,

    highlight: {
        theme: "default",
    },

    scripts: ["https://buttons.github.io/buttons.js"],

    onPageNav: "separate",
    cleanUrl: true,

    ogImage:      "img/undraw_online.svg",
    twitterImage: "img/undraw_tweetstorm.svg",

    repoUrl: "https://github.com/nulliel/konduit",
}
