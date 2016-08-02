angular.module('Notes')
  .directive('notes', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/note.html',
      controller:'NotesController',
      controllerAs: 'note'
    };
  });
