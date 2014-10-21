(function(){

var app = angular.module('loja', []);

var produtos = [
	{
		nome: 'Impressora 3D',
		preco: 5000,
		descricao: 'Uma ótima impressora 3D!',
		disponivelEmEstoque: false,
		imagem : "imagens/impressora-3d.jpg"
	},
	{
		nome: 'Ultra Ultrabook',
		preco: 3000,
		descricao: 'Estação de trabalho multimídia!',
		disponivelEmEstoque: true,
		imagem : "imagens/ultrabook.jpg"
	},
	{
		nome: 'Apontador Laser',
		preco: 100,
		descricao: 'Melhore 100% suas apresentações',
		disponivelEmEstoque: true,
		imagem : "imagens/apontador-laser.jpg"
	},	
]; 

app.controller('LojaController', function(){
	this.produtos = produtos;
});

})();