angular.module('NoteHandler').controller('NoteShowController', function($location,$routeParams, Note, $scope) {
   $scope.note = Note.get({id:$routeParams.id});
   
   $scope.deleteNote = function(note){
	note.$remove().then(function(){
	   $location.path('/notes');
	});
   }

});

