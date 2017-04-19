const componentLibrary = require('component-library');

componentLibrary(
    'styleguide/templates',
    'dist',
    {
        layout: 'styleguide/layout.html',
        baseUrl: '/habrahabr/dist/',
        title: 'Набор компонентов сайта Хабрахабр',
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
);