(function(){

var app = angular.module('loja', []);

var produtos = [
	{
		nome: 'Impressora 3D',
		preco: 5000,
		descricao: 'Uma ótima impressora 3D!',
		quantidadeEmEstoque: 2,
		disponivelEmEstoque : function() {
			return this.quantidadeEmEstoque > 0;
		},
		imagem : "imagens/impressora-3d.jpg",
		especificacoes : "Detalhes da impressora 3D",
		opinioes: ""
	},
	{
		nome: 'Ultra Ultrabook',
		preco: 3000,
		descricao: 'Estação de trabalho multimídia!',
		disponivelEmEstoque : function() {
			return this.quantidadeEmEstoque > 0;
		},
		quantidadeEmEstoque: 2,
		imagem : "imagens/ultrabook.jpg",
		especificacoes : "Detalhes do ultrabook",
		opinioes: ""
	},
	{
		nome: 'Apontador Laser',
		preco: 100,
		descricao: 'Melhore 100% suas apresentações',
		disponivelEmEstoque : function() {
			return this.quantidadeEmEstoque > 0;
		},
		quantidadeEmEstoque: 2,
		imagem : "imagens/apontador-laser.jpg",
		especificacoes : "Detalhes do apontador laser",
		opinioes: ""
	},	
]; 

app.controller('LojaController', function(){
	this.produtos = produtos;
	this.comprar = function(produto) {
		produto.quantidadeEmEstoque--;
	}
});

app.controller('PainelController', function(){
	this.tab = 1;
	this.mostrarAba = function(numero) {
		this.tab = numero;
	}
	this.abaEstahSelecionada = function(numero) {
		return this.tab === numero;
	}
});

})();