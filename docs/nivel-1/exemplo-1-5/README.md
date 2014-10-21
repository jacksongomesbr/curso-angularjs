# Controllers e Data binding

Como visto, data binding permite ao controller apresentar dados na view. Neste momento, o aplicativo possui um controller (`LojaController`) e a view, que é representada diretamente no arquivo `index.html`.

A definição de dados no módulo `loja` segue uma representação de objetos diretamente no Javascript. Por exemplo:

```js
var produto = {
	nome: 'Impressora 3D',
	preco: 5000,
	descricao: 'Uma ótima impressora 3D!'
};
```

Este código define um objeto `produto`, que possui os atributos `nome`, `preco` e `descricao`.

Para que este objeto possa ser apresentado, é necessário que o controller tenha conhecimento sobre ele, assim, ele deve existir no escopo do controller `LojaController`:

```js
var app = angular.module('loja', []);

var produto = {
	nome: 'Impressora 3D',
	preco: 5000,
	descricao: 'Uma ótima impressora 3D!'
};

app.controller('LojaController', function(){
	this.produto = produto;
});
```

## Apresentando dados na view

Utilizando controllers e expressões, é possível que dados sejam apresentados na view. Como `LojaController` define uma atributo que referencia o objeto `produto` definido anteriormente, basta acessar este atributo para ter acesso aos dados e, assim, apresentar os dados do produto na view.

```html
<div ng-controller="LojaController as loja">
	<h1>{{loja.produto.nome}}</h1>
	<p>R$ {{loja.produto.preco}}</p>
	<p>{{loja.produto.descricao}}</p>
</div>
```

A expressão `{{loja.produto.nome}}` indica ao Angular que ele deve avaliar `loja` (como o controller `LojaController`), `produto` (como o atributo `produto` de `LojaController`) e `nome` (como o atributo `nome` do objeto `produto`).

É importante notar também que a diretiva `ng-controller` aplicada no elemento `div` faz com que o controller seja instanciado e posssa ser utilizado apenas dentro do próprio elemento `div`. Qualquer tentativa de fazer o contrário, gerará erro.

## Desafio 1

Modifique o aplicativo para que ele apresente dados da loja. Considere que a loja se chama **"AJ Store"**, que se encontra no endereço **"Av. Theotônio Segurado, 1501 Sul, Sala X do Complexo de Informática"** e que tem um serviço de atendimento ao cliente (SAC) que atende por meio do telefone **"(63) 3219-9000"**, todos os dias, no horário **"8h às 12h" e "14h às 18h"**.