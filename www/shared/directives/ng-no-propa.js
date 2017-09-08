app.directive("ngNoPropa",function() {
	return {
		restrict : "A",
		link : function (scope, $elem, $attr) {
			$elem.on("click",function(e){
				e.stopPropagation();
			});
		}
	}
});