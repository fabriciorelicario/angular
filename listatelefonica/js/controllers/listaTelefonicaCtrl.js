angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
  $scope.app = "Lista Telefonica";
  $scope.contatos = [
    {nome: "pedor", data: new Date(), telefone: "111111111", operadora:{nome: "Oi", codigo: "31", categoria: "Celular"}, cor: "blue"},
    {nome: "ana", data: new Date(), telefone: "22222222", operadora: {nome: "Vivo", codigo: "14", categoria: "Celular"}, cor: "yellow"},
    {nome: "maria", data: new Date(), telefone: "33333333", operadora: {nome: "Tim", codigo: "41", categoria: "Celular"}, cor: "red"},
    {nome: "joao", data: new Date(), telefone: "44444444", operadora: {nome: "GVT", codigo: "31", categoria: "Fixo"}, cor: "green"}
  ];

  $scope.operadoras = [
    {nome: "Oi", codigo: "31", categoria: "Celular"},
    {nome: "Vivo", codigo: "14", categoria: "Celular"},
    {nome: "Tim", codigo: "41", categoria: "Celular"},
    {nome: "GVT", codigo: "31", categoria: "Fixo"},
    {nome: "Embratel", codigo: "21", categoria: "Fixo"},

];

  $scope.adicionarContato = function(contato){
    $scope.contatos.push(angular.copy(contato));
    delete $scope.contato;
    $scope.contatoForm.$setPristine();
};

  $scope.apagarContatos = function(contatos){
      $scope.contatos = contatos.filter(function (contato) {
          if(!contato.selecionado) return contato;
      });
  };

  $scope.isContatoSelecionado = function(contatos){
      return contatos.some(function (contato){
          return contato.selecionado;
      });
  };

  $scope.ordenarPor = function(campo){
      $scope.criterioDeOrdenacao = campo;
      $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
  };
});
