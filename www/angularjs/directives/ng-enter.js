//Invoke function of enter key press event.
//Usage - <input type="text" ng-enter="myFun"> - myFun not myFun() inside the directive.
app.directive("ngEnter",function(){
	return {
		scope : {
			ngEnter : "="
		},
		link : function(scope, $elem, $attr){

			$elem.on("keypress",function(e){
				if(e.keyCode == 13){
					//console.log(e);
					if(scope.ngEnter)
						scope.ngEnter();
				}
			});
		}
	}
});