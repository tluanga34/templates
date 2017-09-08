//DIRECTIVE FOR INPUT DATE FUNTIONALITIES
app.directive("ngInputDate",function($timeout){
	return {
		restrict : "A",
		scope : {
			ngInputDate : "=",
		},
		link : function(scope, $elem, $attr){
			
			scope.ngInputDate = scope.ngInputDate || {};
			
			var id = scope.ngInputDate.id || "custid_"+Math.random(),
				dateElem;

			$elem.attr({"id":id});
				
			dateElem = new dhtmlXCalendarObject(id);
			dateElem.setDateFormat("%d-%M-%Y");
			dateElem.hideTime();

			if(scope.ngInputDate.value != undefined){
				dateElem.setDate(new Date(scope.ngInputDate.value));
				$elem.val(dateElem.getFormatedDate("%d-%M-%Y", new Date(scope.ngInputDate.value)));
			}
			//METHOD TO SHOW THE CALENDAR
			scope.ngInputDate.show = function(){
				
				//PUTTING TIMEOUT SO TO PREVENT IMMEDIATE HIDE BY EVENT BUBBLING
				setTimeout(function(){
					dateElem.show();
				},10);
				
			}
						
			//LISTEN TO USER SELECT DATE EVENT AND UPDATE MODEL ACCORDINGLY
			dateElem.attachEvent("onClick", function(date, state){
				scope.ngInputDate.value = dateElem.getDate();
				scope.$apply();
			});
			
			//LISTENING TO OBJECT RESET REQUEST AND EMPTY THE INPUT FIELD
			scope.$watch('ngInputDate.value', function(newValue, oldValue) {
				if(newValue == "" || newValue == undefined){
					$elem.val("");
					
					if($elem.attr("required") != undefined)
						$elem[0].setCustomValidity("Please pick a date");
				} else{
					$elem[0].setCustomValidity("");
				}
			});
				
		}
	}
});