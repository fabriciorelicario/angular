// FUNÇÃO DO TIPO CONSTRUTORA
app.service("operadorasAPI", function($http, config){
	this.getOperadoras = function(){
		return $http.get(config.ajaxUrl + "/operadoras");
	}

})