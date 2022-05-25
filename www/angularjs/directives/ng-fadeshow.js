
//DEPEND ON VELOCITY AND JQUERRY
app.directive("ngFadeshow",function(){
	return {
		scope : {
			ngFadeshow : "="
		},
		link : function(scope, $elem){			
			scope.$watch('ngFadeshow', function(newValue, oldValue) {

				if(newValue){
					$elem.addClass("active");
					$elem.velocity({opacity : [1,0]},300);
				} else {

					$elem.velocity({opacity : [0,1]},300,function(){
						$elem.removeClass("active");
					});
				}				
			});
		}
	}
});