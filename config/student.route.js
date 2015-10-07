/**
 * Created by Anonmous on 1/29/2015.
 */
var  app = angular.module('app')
    .config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'views/student.form.html',
            controller: 'MainCtrl'
        })
        .when('/edit/:id', {
            templateUrl: 'views/student.edit.html',
            controller: 'EditCtrl'
        })

});