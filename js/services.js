(function () {
  "use strict"

angular.module('Notes')
  .factory('url', function () {
  return {
        getFromText: function(text) 
        {     
          const source = (text || '').toString();
          const regexToken = /(([a-z]+:\/\/)?(([a-z0-9\-]+\.)+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel|local|internal))(:[0-9]{1,5})?(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&amp;]*)?)?(#[a-zA-Z0-9!$&'()*+.=-_~:@/?]*)?)(\s+|$)/gi;
          const urls = source.match(regexToken);
          return urls;
        }
      };

});
angular.module('Notes')
  .service('myWebStorage', function () {
          

        this.save = function( id, noteText, imageUrl){
          var descriptions = {'content': noteText, 'img': imageUrl};
          localStorage.setItem(id, JSON.stringify(descriptions));
        };

        this.getData = function ()
        {
          return localStorage;
        };

        this.delete = function (key)
        {
          localStorage.removeItem(key);
        }
       });
}());
