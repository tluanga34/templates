//Scroll to view
app.directive("ngScrolltoview",function(){
	return {
		scope : {
			ngScrolltoview  : '='
		},
		link : function(scope, $elem){
			//console.log(scope);
			//console.log($elem);

			scope.$watch(function(value){

				setTimeout(function(){
					console.log(scope.ngScrolltoview);
					if(scope.ngScrolltoview == true){
						$elem.velocity('scroll', {
							container : $($elem[0].parentNode),
							duration: 500, offset: -40, easing: 'ease-in-out'});
					}
				},50);
				
			});

			//$("#beer").velocity('scroll', {duration: 500, offset: -40, easing: 'ease-in-out'});
		}
	}
});