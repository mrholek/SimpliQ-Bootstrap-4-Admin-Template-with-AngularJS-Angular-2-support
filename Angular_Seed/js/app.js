//Default colors
var brandPrimary =  '#36a9e1';
var brandSuccess =  '#bdea74';
var brandInfo =     '#67c2ef';
var brandWarning =  '#fabb3d';
var brandDanger =   '#ff5454';

var grayDark =      '#34383c';
var gray =          '#9fabb8';
var grayLight =     '#dbdee0';
var grayLighter =   '#e9ebec';
var grayLightest =  '#f9f9f9';

angular
    .module('app', [
        'ngAnimate',
        'ui.router',
        'oc.lazyLoad',
        'pascalprecht.translate',
        'ncy-angular-breadcrumb',
        'angular-loading-bar',
        'ngSanitize'
    ])
    .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 1;
    }])
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
        $rootScope.$on('$stateChangeSuccess',function(){
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        });
        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;
    }]);
