(function() {
	'use strict';

	angular.module("LunchCheck", []).controller(
			'LunchCheckController',
			function($scope) {
				$scope.checkFoodCount = function() {
					var items = [];
					var foodItems  =[];
					if (angular.isDefined($scope.userInput)
							&& $scope.userInput != ""){
						items = $scope.userInput.split(',');
						for(var i=0;i<items.length;i++){
							if(angular.isDefined(items[i]) && items[i]!=""){
								foodItems.push(items[i]);
							}
						}
					
					}
					if (foodItems.length == 0) {
						$scope.output = "Please enter data first";
						$scope.success = false;
					} else {
						if (foodItems.length > 3) {
							$scope.output = "Too much!";
							$scope.success = true;
						} else {
							$scope.output = "Enjoy!";
							$scope.success = true;
						}
					}
				}

			});

})();
