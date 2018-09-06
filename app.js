(function (){
  'use strict';
  
  
  angular.module("LunchCheck" ,[]).
  controller('LunchCheckController',function ($scope){
    console.log($scope.userInput);
    $scope.checkFoodCount = function(){
      
      var items = $scope.userInput.split(',');
      if(angular.isUndefined(items) && items.length==0){
        $scope.output= "Please enter data first"
 	$scope.success=false;
      }
      else{
            if(items.length>3){
              $scope.output = "Too much!";
              $scope.success=false;
            }
            else{
              $scope.output = "Enjoy!";
               $scope.success=true;
            }
    }
	}
    
  });
    
  })();
