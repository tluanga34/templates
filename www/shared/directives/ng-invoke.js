//Invoke another element by jquerry selector.
app.directive("ngInvoke",function(){
	return {
		scope : {
			ngInvoke : "="
		},
		link : function(scope, elem, attr){
			
			elem.on("click",function(){
				
				var ivokeId = elem.attr("ivokeid");
				
				if(ivokeId)
					angular.element(ivokeId).click();
				else
					angular.element(scope.ngInvoke).click();
			});
			
		}
	}
});