(function(){

var app = angular.module('loja', []);

var produtos = [
	{
		nome: 'Impressora 3D',
		preco: 5000,
		descricao: 'Uma ótima impressora 3D!',
		disponivelEmEstoque: false,
	},
	{
		nome: 'Ultra Ultrabook',
		preco: 3000,
		descricao: 'Estação de trabalho multimídia!',
		disponivelEmEstoque: true,
	},
	{
		nome: 'Apontador Laser',
		preco: 100,
		descricao: 'Melhore 100% suas apresentações',
		disponivelEmEstoque: true,
	},	
]; 

app.controller('LojaController', function(){
	this.produtos = produtos;
});

})();