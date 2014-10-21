# Diretiva `ng-repeat`

A diretiva `ng-repeat` é utilizada para situações em que é necessária uma lógica semelhante à de um laço de repetição, com base em um conjunto (array, por exemplo). Ela é utilizada mais ou menos assim:

```html
<div ng-repeat="item in array">
...
</div>
```

Desta forma, o valor da diretiva `ng-repeat` é uma expressão que representa a instrução "repita o elemento para cada item presente no vetor". 

O aplicativo `loja` foi modificado para que, ao invés de um produto, tivesse vários produtos:

```js
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
```

Perceba que o atributo do controller foi modificado de `produto` para `produtos`.

Na view, utiliza-se a diretiva `ng-repeat` para apresentar a lista de produtos:

```html
<div ng-repeat="produto in loja.produtos">
	<h1>{{produto.nome}}</h1>
	<p>R$ {{produto.preco}}</p>
	<p>{{produto.descricao}}</p>
	<button ng-show="loja.produto.disponivelEmEstoque">Comprar</button>
	<hr></hr>
</div>
```

A expressão `produto in loja.produtos` indica que o elemento `div` será repetido, gerando HTML que apresenta a lista de produtos. 