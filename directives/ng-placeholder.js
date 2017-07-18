app.directive("ngPlaceholder",function(){
	return {
		scope : {
			ngPlaceholder : "="
		},
		link : function(scope, $elem){

			//console.log("Placeho");
			//console.log(scope.ngPlaceholder);
			//console.log($elem[0]);

			scope.$watch(function(value){
			//	console.log(value);
				$elem[0].placeholder = scope.ngPlaceholder;
			});
		}
	}
});