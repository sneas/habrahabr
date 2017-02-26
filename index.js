const componentLibrary = require('component-library');

componentLibrary(
    'styleguide',
    'dist',
    {
        baseUrl: '/habrahabr/dist/',
        css: [
            'https://habracdn.net/habr/styles/_build/global_main.css'
        ]

    }
);