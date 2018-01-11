//Bind data to the element. Alternative for ng-bind-html
app.directive("ngCustombind",function(){
	return {
		scope : {
			ngCustombind : "="
		},
		link : function(scope, elem, attr){			
			scope.$watch('ngCustombind', function(newValue, oldValue) {
				elem.html(scope.ngCustombind);
			});
		}
	}
});