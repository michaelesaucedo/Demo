angular.module('NoteHandler',['ngRoute','ngResource',"ngGravatar"]).config(function(GravatarProvider){
   GravatarProvider.setSize(100);
});

