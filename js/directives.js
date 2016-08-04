angular.module('Notes')
  .directive('note', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/note.html',
    };
  });

  angular.module('Notes')
  .directive('notes', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/notes.html',
      controller:'NotesController',
      controllerAs: 'note'

    };
  });
