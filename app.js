(function (){
  'use strict';
  
  
  angular.module("LunchCheck" ,[]).
  controller('LunchCheckController',function ($scope){
    
    
    function checkFoodCount(){
      var items = $scope.userInput.split(',');
      if(items==0){
        $scope.output= "Please enter data first"
      }
      if(items.length>=3)
        $scope.output = "Too much!";
      else
        $scope.output = "Enjoy!";
      }
    
  });
    
  })();
