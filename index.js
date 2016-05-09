angular.module('app', []);

angular.module('app').controller('todoController', ['$scope', function($scope) {
	
	$scope.sort = 'priority';
	
	$scope.newTodo = {};
	$scope.todos = [];

	$scope.addTodo = function() {
		$scope.todos.push($scope.newTodo);
		$scope.newTodo = {};

		}

	$scope.getTodoClass = function(todo) {
	
		switch(todo.priority) {
			case "1": return 'danger';
			case "2": return 'warning';
			case "3": return 'info';
		}

		$scope.predicate='priority';
		$scope.reverse = true;
		$scope.sort = function(predicate){
		$scope.reverse = ($scope.predicate === predicate) ?! $scope.reverse : false;
		$scope.predicate = predicate;

	};
	
		
	};
	
}]);