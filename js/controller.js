angular.module('dateInputExample', ['ui.bootstrap'])
.controller('DateController', ['$scope', function($scope) {

  $scope.validate = function(value) {
    var today = new Date();

    if (today.setHours(0) <= value.setHours(0)) {
      alert("OK..");
    } else {
      alert("Mayor");
    }
  };
}]);
