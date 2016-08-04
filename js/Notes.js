(function() {
  "use strict";

angular.module('Notes')
  .controller('NotesController',['url','myWebStorage',function (url, myWebStorage){		

	var note = this;

  note.notesInDb = getDb().getData();

  note.modelOptions = {
    updateOn: 'default blur',
     debounce: {
      default: 10000,
       blur: 0} 
     };

  function getDb()
  {
      return myWebStorage;
  };

  note.addToDbNewNote = function (){
    getDb().save(Date.now(),'','');
  };

  note.deleteNote = function (id){
    getDb().delete(id);
  };


  note.saveAndSearchUrl = function( id, textNote ){

    var urls = url.getFromText(textNote);

    if (urls !== null){  
        let arrayWithImagesUrl = []
        urls.forEach( url=> { 
           showInNoteIfImage(id,textNote,url);
          })
    }
    else{
      getDb().save(id,textNote, '');
    }
  };

  note.setCorrectType =  function(valueFromStorage){ 

    if(typeof valueFromStorage != 'undefined')
    { 
      return setDataToJson(valueFromStorage);
    }
  };
  function setDataToJson(valueFromStorage)
  {
      if(typeof valueFromStorage === "object")
        {
          return valueFromStorage;
        }
        else
        {
          return JSON.parse(valueFromStorage);
        }
  };
  function showInNoteIfImage(id,text,url) {
      var img = new Image();
      img.src = url;

      img.onload = function() { getDb().save(id, text, url); window.location.reload();};
      img.onerror = function() { getDb().save(id, text, '') };
  }


}]);

})();
