(function() {
  "use strict";

angular.module('Notes')
  .controller('NotesController',function ( $scope, $http) 
{		

	var note = this;
  note.textAreaText="";
  note.modelOptions = {
    updateOn: 'default blur',
     debounce: {
      default: 10000,
       blur: 0} 
     };
     note.image='';

     function testImage(url,timeout) {
    timeout = timeout || 5000;
    var timedOut = false, timer;
    var img = new Image();
    console.log(note.image);
    img.onerror = img.onabort = function() {
        if (!timedOut) {
          console.log('err');
            clearTimeout(timer);
          
        }
    };
    img.onload = function() {
        if (!timedOut) {
            clearTimeout(timer);
            note.image = url;
            console.log(note.image);
        }
    };
    img.src = url;
    timer = setTimeout(function() {
        timedOut = true;
       
    }, timeout); 
};


	note.searchForImagesInText = function( text ){
    var source = (text || '').toString();

  
    var regexToken = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;

    var urls = source.match(regexToken);
    if(urls)
    {
    urls.forEach(url => {
              testImage(url);
     
            });
    };
    
};


});

})();
