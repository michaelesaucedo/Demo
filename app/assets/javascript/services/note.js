angular.module('NoteHandler').factory('Note', function($resource){
   return $resource('/notes/:id',{id:"@id"},{
	update:{
	   method: "PUT"
	}
   });
});
