app.filter("strEllipsisFilter", function(){
	return function(string, size){
		if(string.length <= size) return string;
		var output = string.substring(0, (size || 5)) + "...";
		return output;
	};
});