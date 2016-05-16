angular.module('NoteHandler').controller('NoteEditController', function($scope,Note,User, Category, $routeParams,$location)
{ 

   $scope.note = Note.get({id:$routeParams.id});
   $scope.categories = Category.query();
   $scope.users = User.query();

   $scope.isSubmitting = false;

   $scope.saveNote = function(note){
	$scope.isSubmitting = true;

	note.$update().finally(function(){
	   $scope.isSubmitting = false;
	   $location.path("/notes/" + note.id);
	});
   }
});
