app.controller("exercicioCtrl", function($scope, $filter, usuariosAPI, operadorasAPI, tokenGenerator){

    $scope.app = "Exercicio";
    $scope.usuarios = [];
    $scope.selectOperadoras = [];
    $scope.errors = [];

    //tambem e possivel aplicar filtro diretamente no objeto,
    //afim de melhorar a performance

    // $scope.usuarios = [
    //     {nome: $filter("uppercase")("Joao"), telefone: "9999-9999", data: new Date(), operadora: {id: 4, codigo: "31", nome: "Oi", tipo: "Movel"}, cor: "success"},
    //     {nome: "Maria", telefone: "8888-8888", data: new Date(), operadora: {id: 23, codigo: "41", nome: "Tim", tipo: "Movel"}, cor: "primary"}
    // ];

    // $scope.selectOperadoras = [
    //     {id: 4, codigo: "31", nome: "Oi", tipo: "Movel", preco: 2},
    //     {id: 23, codigo: "41", nome: "Tim", tipo: "Movel", preco: 1},
    //     {id: 12, codigo: "14", nome: "Vivo", tipo: "Movel", preco: 3},
    //     {id: 55, codigo: "21", nome: "Embratel", tipo: "Fixo", preco: 0.50},
    //     {id: 13, codigo: "31", nome: "GVT", tipo: "Fixo", preco: 0.30}
    // ];

    var usuariosGet = function(){
        usuariosAPI.getUsuarios().success(function(data){
            $scope.usuarios = data;
        }).error(function (data, status){
            $scope.errors.push({message: "Não foi possivel carregar os usuarios!"});
        });
    };

    var operadorasGet = function(){
        operadorasAPI.getOperadoras().success(function(data){
            $scope.selectOperadoras = data;
        }).error(function(){
            $scope.errors.push({message: "Não foi possivel carregar as operadoras!"});
        });
    }

    // console.log($scope.usuarioForm);
    // ao declarar uma funcao e necessario adiciona-la ao $scope para interação com a view
    $scope.addUsuario = function(form){
        // sem ajax
        //--------------------------------------------
        // $scope.usuarios.push(angular.copy(form));
        // delete $scope.form;

        // //faz com que o formulario seja $pristine e $untouch novamente assim o alert nao aparecera
        // $scope.usuarioForm.$setPristine();
        // $scope.usuarioForm.$setUntouched();
        //--------------------------------------------
        
        //com ajax
        form.token = tokenGenerator.generate();

        form.data = new Date();
        usuariosAPI.saveUsuario(form).success(function(data, config){
            delete $scope.form;
            //faz com que o formulario seja $pristine e $untouch novamente assim o alert nao aparecera
            $scope.usuarioForm.$setPristine();
            $scope.usuarioForm.$setUntouched();

            //sem recarregar usuarios ganhando em performance
            //$scope.usuarios.push(angular.copy(config.data));
            
            // recarregando usuarios fazendo novamente o get
            usuariosGet();
        }).error(function (){
            $scope.errors.push({message: "Não foi possivel salvar o usuario!"});
        });
    };

    //remove o usuario
    $scope.removeUsuario = function(usuarios){
        // sem ajax
        $scope.usuarios = usuarios.filter(function(elem){
            if(!elem.checked) return elem;
        });
    };

    //copica o(s) usuarios selecionados
    $scope.copyUsuario = function(usuarios){
        return usuarios.filter(function(elem){
            if(elem.checked) $scope.usuarios.push(angular.copy(elem));
            elem.checked = false;
        });
    };

    //verifica se o usuario está selecionado
    $scope.isUsuarioChecked = function (usuarios){
        return usuarios.some(function(elem){
            return elem.checked;
        });
    };

    //ativa todas as checkeboxes de todos os usuarios 
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

    //faz ordenacao de ursuarios
    $scope.itemSortBy = function(field){
        //sortOrder objeto cirado na sortBy: como primeiro parametro para receber o campo passado por parametro
        $scope.sortOrder = (field == "operadora") ? "operadora.codigo" : field;
        //sortDir objeto criado na sortBy: como segundo parametro para ASC ou DESC por padrao ja é ASC
        $scope.sortDir = !$scope.sortDir;
    }

    $scope.checked = "highlight";
    
    usuariosGet();
    operadorasGet();
});