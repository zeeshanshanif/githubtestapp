/**
 * Created by Anonmous on 1/29/2015.
 */
var  app = angular.module('app')
.value('fbURL', 'https://githubtestapp.firebaseio.com/')
.factory('Person', function (fbURL, $firebase) {
    return $firebase(new Firebase(fbURL)).$asArray();
});
