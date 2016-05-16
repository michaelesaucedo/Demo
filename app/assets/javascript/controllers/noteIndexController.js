angular.module('NoteHandler').controller('NoteIndexController', function (Note,$scope){
   $scope.notes = Note.query();
   $scope.search = {};
});
