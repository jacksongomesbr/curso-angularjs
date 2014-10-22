(function(){

var app = angular.module('loja', []);

var produto = {
	nome: 'Impressora 3D',
	preco: 5000,
	descricao: 'Uma ótima impressora 3D!',
	quantidadeEmEstoque: 1,
	disponivelEmEstoque : function() {
		return this.quantidadeEmEstoque > 0;
	}
};

app.controller('LojaController', function(){
	this.produto = produto;
});

})();