angular.module("exercicio").controller("exercicioCtrl", function($scope){
    $scope.app = "Exercicio";

    $scope.usuarios = [
        {nome: "Fabricio", telefone: "9999-9999", operadora: {id: 4, codigo: "31", nome: "Oi", tipo: "Movel"}, cor: "success"},
        {nome: "Jonis", telefone: "8888-8888", operadora: {id: 23, codigo: "41", nome: "Tim", tipo: "Movel"}, cor: "primary"}
    ];

    $scope.selectOperadoras = [
        {id: 4, codigo: "31", nome: "Oi", tipo: "Movel"},
        {id: 23, codigo: "41", nome: "Tim", tipo: "Movel"},
        {id: 12, codigo: "14", nome: "Vivo", tipo: "Movel"},
        {id: 55, codigo: "21", nome: "Embratel", tipo: "Fixo"},
        {id: 13, codigo: "31", nome: "GVT", tipo: "Fixo"}
    ];

    // ao declarar uma funcao e necessario adiciona-la ao $scope para interação com a view
    $scope.addUsuario = function(form){
        $scope.usuarios.push(angular.copy(form));
        delete $scope.form;
        //faz com que o formulario seja $pristine novamente assim o alert nao aparecera
        $scope.usuarioForm.$setPristine;
    };
    $scope.removeUsuario = function(usuarios){
        $scope.usuarios = usuarios.filter(function(elem){
            if(!elem.checked) return elem;
        });
    };

    $scope.copyUsuario = function(usuarios){
        return usuarios.filter(function(elem){
            if(elem.checked) $scope.usuarios.push(angular.copy(elem));
            elem.checked = false;
        });
    };

    $scope.isUsuarioChecked = function (usuarios){
        return usuarios.some(function(elem){
            return elem.checked;
        });
    };

    $scope.checkAllUsuarios = function(usuarios){
        if(this.checkedAll){
            return usuarios.forEach(function(elem){
                elem.checked = true;
            });
        } else {
            return usuarios.forEach(function(elem){
                elem.checked = false;
            });
        }
    };

    $scope.checked = "highlight";
})
