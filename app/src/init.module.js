angular
    .module('moApp.init', ['ngMaterial'])
    .constant('PATTERNS', {
        fileName: /^[a-zA-Z0-9_\-,!@#$%^&()=+ ]+$/,
        phone: /^[+]?[0-9\- ]+$/
    })
    .constant('APP_CONFIG', {
        appName: 'Angular-stub',
        logoSrc: './app/assets/images/os2_small.svg'
    });