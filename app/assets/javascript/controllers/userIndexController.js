angular.module('NoteHandler').controller('UserIndexController',function(User, $scope){
   $scope.users = User.query();
});
