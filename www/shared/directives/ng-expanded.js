//Work with Velocity JS
//User true or false in the directive to control it.
app.directive("ngExpanded",function(){
	return {
		scope : {
			ngExpanded : "=",

		},
		link : function (scope, $elem, $attr){

			var firstTime = true,
				expansionSpeed = 700;

			// scope.$watch("scope",function(){
				// console.log("Scope change");
			// });

			scope.$watch("ngExpanded",function(){
				//console.log(scope.ngExpanded);
				
				if(firstTime && !scope.ngExpanded){
					$elem.css({"height":"0px"});
				}

				else if(!firstTime && scope.ngExpanded){

					setTimeout(function(){
						var height = $elem[0].scrollHeight;
						$elem.velocity({"height":height+"px"}, expansionSpeed, function(){
							$elem.css({"height":'auto'});
							
							var top = $elem[0].offsetTop - (document.body.clientHeight / 2);
							// $("html").velocity("scroll", { offset: top+"px", mobileHA: true, duration: 1000});

						});

						
					},100);		
				}

				else if(!firstTime && !scope.ngExpanded){
					$elem.velocity({"height":"0px"}, expansionSpeed);
				}


				firstTime = false;
			});
		}
	}
});
