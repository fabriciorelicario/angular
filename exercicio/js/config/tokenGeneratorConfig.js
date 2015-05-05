//SERVICO DO TIPO PROVIDER PODENDO CONFIGURAR PREVIAMENTE OS VALORES QUE SERAM PASSADOS 
app.config(function(tokenGeneratorProvider){
	tokenGeneratorProvider.setLength(20);
})