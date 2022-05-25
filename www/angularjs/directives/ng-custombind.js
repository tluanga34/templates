//Bind data to the element. Alternative for ng-bind-html
angular.module('app')

	.directive("htmlBind", ["$compile", "$parse", function ($compile, $parse) {

		return {
			link: function (scope, elem, attr) {
				
				scope.$watch(attr.htmlBind, function(){
					var scopeExpression = $parse(attr.htmlBind)(scope);
					elem.html(scopeExpression);
					$compile(elem.contents())(scope);
				});
			}
		}


	}]);