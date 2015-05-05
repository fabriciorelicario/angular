//SERVICO DO TIPO PROVIDER PODE RECEBER PRECONFIGURACOES 
app.provider("tokenGenerator", function(){
	var _length = 20;
	this.getLength = function(){
		return _length;
	};

	this.setLength = function(length){
		_length = length;
	};

	this.$get = function(){
		return{
			generate: function(){
				var token = "";
		        while(token.length < _length){
		            token += String.fromCharCode(Math.floor(Math.random() * 64) + 32);
		        }
		        return token;
			}
		};
	};
});