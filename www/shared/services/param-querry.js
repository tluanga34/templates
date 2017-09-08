app.service("paramQuerry",function(){

	this.getParam = function(param){

		var url = location.href,
			sub_url = null;

		if(url.indexOf(param+"=") != -1){

			sub_url = url.split(param+"=")[1];
			
			if(sub_url.indexOf("&") !== -1){
				sub_url = sub_url.split("&")[0];
			}

			try{
				sub_url = decodeURIComponent(sub_url);
			} catch(e){}	
			
			return sub_url;
		} else {
			return '';
		}	
	}
});