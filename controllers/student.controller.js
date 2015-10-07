/**
 * Created by Anonmous on 1/29/2015.
 */
var  app = angular.module('app')
.controller('MainCtrl', function ($scope, Person) {

    $scope.add = function () {
        var save = Person.$add({
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            rollNo:$scope.rollNo,
            email:$scope.email,
            age:$scope.age

        });

        $scope.firstName = '';
        $scope.lastName = '';
        $scope.rollNo= '';
        $scope.email= '';
        $scope.age= '';

        //if (save) {
        //    alert('saved successfully');
        //} else {
        //    alert('something went wrong');
        //}

    };
    $scope.person = Person;
    $scope.remove = function (id) {
        Person.$remove(id);
    }

})
.controller('EditCtrl', function ($scope, $location, $routeParams, $firebase, fbURL) {
    var personURL = new Firebase(fbURL + $routeParams.id);
    $scope.person = $firebase(personURL).$asObject();

    $scope.edit = function() {
        $scope.person.$save();
        $location.path('/');
    }

});