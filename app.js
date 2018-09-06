(function() {
	'use strict';

	angular.module("LunchCheck", []).controller(
			'LunchCheckController',
			function($scope) {
				var items = '';
				$scope.checkFoodCount = function() {
					if (angular.isDefined($scope.userInput)
							&& $scope.userInput != ""){
						items = $scope.userInput.split(',');
						for(var i=0;i< items.length;i++){
							if(items[i]==""){
								items.splice(i,1);
							}
						}
					}
					if (items.length == 0) {
						$scope.output = "Please enter data first"
					} else {
						if (items.length > 3) {
							$scope.output = "Too much!";
						} else {
							$scope.output = "Enjoy!";
						}
					}
				}

			});

})();
