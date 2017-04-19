const componentLibrary = require('component-library');
const copyDir = require('copy-dir');

const baseUrl = '/habrahabr/dist/';

componentLibrary(
    'styleguide/templates',
    'dist',
    {
        layout: 'styleguide/layout.html',
        baseUrl: baseUrl,
        title: 'Набор компонентов сайта Хабрахабр',
        favicon: {
            href: baseUrl + 'assets/favicon-32x32.png',
            rel: 'icon',
            type: 'image/png'
        },
        overview: 'Все компоненты',
        search: 'Поиск',
        css: [
            'https://habracdn.net/habr/styles/_build/global_main.css',
            'https://habracdn.net/habr/styles/_parts/posts.css',
            'https://habracdn.net/habr/styles/_build/post_common_css.css'
        ],
        js: [
            'https://habracdn.net/habr/javascripts/app.vendors.js',
            'https://habracdn.net/habr/javascripts/app.main.js'
        ]
    }
).then(function() { // Copy favicon right after component library has been compiled
    copyDir.sync('assets', 'dist/assets');
});