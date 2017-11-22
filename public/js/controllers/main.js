app.controller('mainController',['$scope','$interval', mainController]);

function mainController($scope, $interval){
	$scope.title = 'Tesla';
	$scope.message = 'Introducing the Model 3';
	$scope.formText = 'Be the first to own the new Tesla Model 3. Sing up to our mailing liat to find out more.';
	$scope.countries = ["USA", "Canada", "India", "Australia", "England", "France"];
	$scope.selectedCoutry = '';

	$scope.subscribe = function(){
		console.log('submitted');
	}
}
