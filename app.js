(function() {
	'use strict';

	angular.module("LunchCheck", []).controller(
			'LunchCheckController',
			function($scope) {
				var items = '';
				$scope.checkFoodCount = function() {
					if (angular.isDefined($scope.userInput)
							&& $scope.userInput != "")
						items = $scope.userInput.split(',');
					if (items.length == 0) {
						$scope.output = "Please enter data first"
						$scope.myObj ={
							"font-color":"green"
						}
					} else {
						if (items.length > 3) {
							$scope.output = "Too much!";
								$scope.myObj ={
							"font-color":"red"
						}
						} else {
							$scope.output = "Enjoy!";
								$scope.myObj ={
							"font-color":"green"
						}
						}
					}
				}

			});

})();
