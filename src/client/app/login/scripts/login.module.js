(function () {
  'use strict';

  angular.module('app.login', [
    'auth0',
    'angular-storage',
    'angular-jwt'
  ]).config(JwtConfig);

  JwtConfig.$inject = ['$httpProvider', 'jwtInterceptorProvider'];

  function JwtConfig($httpProvider, jwtInterceptorProvider) {
    jwtInterceptor.$inject = ['jwtHelper'];

    function jwtInterceptor(jwtHelper) {
      //@TODO handle expired tokens
      return localStorage.getItem('userJWTToken');
    }

    jwtInterceptorProvider.tokenGetter = jwtInterceptor;

    $httpProvider.interceptors.push('jwtInterceptor');
  }
})();


