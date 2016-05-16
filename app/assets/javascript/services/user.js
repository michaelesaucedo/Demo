angular.module('NoteHandler').factory('User', function($resource){
   return $resource('/users/:id');
});
