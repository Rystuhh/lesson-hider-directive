angular.module('directivePractice').service('directiveSrv', function($http) {

  this.getSchedule = function(){
    return $http.get('../schedule.json');
  };
});
