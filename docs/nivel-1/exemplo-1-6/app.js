(function(){

var app = angular.module('loja', []);

var produto = {
	nome: 'Impressora 3D',
	preco: 5000,
	descricao: 'Uma ótima impressora 3D!',
	disponivelEmEstoque: false,
};

app.controller('LojaController', function(){
	this.produto = produto;
});

})();