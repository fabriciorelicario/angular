//FUNÇÃO DO TIPO FABRICA
app.factory("usuariosAPI", function($http, config){
	var _getUsuarios = function(){
		return $http.get(config.ajaxUrl + "/usuarios");
	}

	var _saveUsuario = function(data){
		return $http.post(config.ajaxUrl + "/usuarios", data);
	}
	// falta concluir
	var _removeUsuario = function(data){
		return $http.post(config.ajaxUrl + "/usuarios", data);
	}

	return {
		getUsuarios : _getUsuarios,
		saveUsuario	: _saveUsuario,
		removeUsuario: _removeUsuario
	}

})