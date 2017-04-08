const componentLibrary = require('component-library');

componentLibrary(
    'styleguide/templates',
    'dist',
    {
        layout: 'styleguide/layout.html',
        baseUrl: '/habrahabr/dist/',
        css: [
            'https://habracdn.net/habr/styles/_build/global_main.css',
            'https://habracdn.net/habr/styles/_parts/posts.css'
        ]

    }
);