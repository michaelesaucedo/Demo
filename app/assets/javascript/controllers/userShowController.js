angular.module('NoteHandler').controller('UserShowController', function(User,$scope,$routeParams){
   $scope.user = User.get({id: $routeParams.id});
});
