angular.module('NoteHandler').factory('Category',function($resource){
   return $resource('/categories/:id');
});
