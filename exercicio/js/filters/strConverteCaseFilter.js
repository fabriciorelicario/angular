app.filter("strConverteCase", function(){
	return function(string){
		strArray = string.split(" ");

		var newStrings = strArray.map(function(elem){
			if(/^(da|de|do)$/i.test(elem)) return elem.toLowerCase();
			return elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase();
		});

		return newStrings.join(" ");
	};
});