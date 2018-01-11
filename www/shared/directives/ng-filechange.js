//File change event
app.directive("ngFilechange",function(){
	return {
		scope : {
			ngFilechange : "=",
			ngMaxsize : '='
		},
		link : function(scope, elem, attr){
			
			console.log(scope.ngFilechange);

			scope.ngFilechange = scope.ngFilechange || { url: '', fileName : '', value : '', error : ''};

			elem.on("change",function(e){
				render(e);
			});
			
			elem[0].value = "";
			
			function render(e){
				var f = e.target.files[0],
					reader = new FileReader();				

				reader.onload = (function(theFile) {
					return function(e) {
						console.log(theFile);
						scope.ngFilechange.url = e.target.result;
						scope.ngFilechange.fileName = theFile.name;

						if(scope.ngMaxsize != undefined){
						
							if(theFile.size > scope.ngMaxsize){
								scope.ngFilechange.error = "File size is bigger than allowed size i.e "+(scope.ngMaxsize / 1000)+" KB";
								elem[0].setCustomValidity("File is bigger than "+(scope.ngMaxsize / 1000)+" KB");
							} else {
								elem[0].setCustomValidity("");
								scope.ngFilechange.error = "";
							}
						}

						scope.$apply();
					};
				})(f);
				 
				reader.readAsDataURL(f);
			}
		}
	}
});