var resumeApp = angular.module('resumeApp', ['ngRoute', 'ui.sortable', 'ngAnimate', 'toastr', 'ngStorage']);

// configure our routes
resumeApp.config(function($routeProvider) {
    $routeProvider

    // route for home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // route for basic info entry
    .when('/basic', {
        templateUrl : 'pages/basic.html',
        controller  : 'basicController'
    })


    // route for statement entry
    .when('/summary', {
        templateUrl : 'pages/summary.html',
        controller  : 'summaryController'
    })

    // route for experience entry
    .when('/experience', {
        templateUrl : 'pages/experience.html',
        controller  : 'experienceController'
    })

    // route for project entry
    .when('/projects', {
        templateUrl : 'pages/projects.html',
        controller  : 'projectsController'
    })

    // route for qualifications entry
    .when('/qualifications', {
        templateUrl : 'pages/qualifications.html',
        controller  : 'qualificationsController'
    })

    // route for skills entry
    .when('/skills', {
        templateUrl : 'pages/skills.html',
        controller  : 'skillsController'
    })

    // route for personal info entry
    .when('/generate', {
        templateUrl : 'pages/generate.html',
        controller  : 'generateController'
    })

});
