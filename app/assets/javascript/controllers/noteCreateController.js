angular.module('NoteHandler').controller('NoteCreateController', function($scope, Note, $location){
  $scope.note = new Note();
  $scope.isSubmitting = false;

  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    note.$save().then(function(){
      $location.path("/notes");
    }).finally(function(){
      $scope.isSubmitting = false;
    });
  }
});
