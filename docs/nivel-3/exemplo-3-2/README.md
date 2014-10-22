# Limpando código

O exemplo 2-3, embora funcional, utiliza uma prática que não é desejável: mistura lógica de comportamento da experiência do usuário diretamente na view. Para corrigir isso, pode-se mover o código referente à lógica do comportamento para um controller.

Primeiro, pode-se modificar o aplicativo, inserindo um novo controller `PainelController`:

```js
(function(){

var app = angular.module('loja', []);

var produtos = [
...
]; 

app.controller('LojaController', function(){
	this.produtos = produtos;
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
```

O controller `PainelController` será utilizado para representar a lógica de comportamento da interface. O `PainelController` possui um atributo chamado `tab`, iniciado com o valor `1` e duas funções `mostrarAba(numero)`, cujo parâmetro indica o número da aba que será exibida, e `abaEstahSelecionada(numero)`, cujo parâmetro indica qual aba se deseja verificar se está selecionada. Estas funções podem ser chamadas de `actions`, embora isso não seja claramente oficial para o AngularJS.

A segunda modificação é na view:

```html
<section ng-controller="PainelController as painel">
	<ul class="nav nav-pills">
		<li ng-class="{ active: painel.abaEstahSelecionada(1)}"><a href ng-click="painel.mostrarAba(1)">Descrição</a></li>
		<li ng-class="{ active: painel.abaEstahSelecionada(2)}"><a href ng-click="painel.mostrarAba(2)">Especificações</a></li>
		<li ng-class="{ active: painel.abaEstahSelecionada(3)}"><a href ng-click="painel.mostrarAba(3)">Opiniões dos clientes</a></li>
	</ul>
	
	<div class="panel" ng-show="painel.abaEstahSelecionada(1)">
		<h4>Descrição</h4>
		<p>{{produto.descricao}}</p>
	</div>
	
	<div class="panel" ng-show="painel.abaEstahSelecionada(2)">
		<h4>Especificações</h4>
		<p>{{produto.especificacoes}}</p>
	</div>
	
	<div class="panel" ng-show="painel.abaEstahSelecionada(3)">
		<h4>Opiniões</h4>
		<p>{{produto.opinioes}}</p>
	</div>					
</section>
```

No clique do item de navegação, é chamada a função  `mostrarAba()`, indicando o número da aba que deve ser visualizada.

Nos elementos `div` que apresentam as informações do produto, a diretiva `ng-show` utiliza a função `abaEstahSelecionada()`.

Em cada elemento `li` da lista de navegação, a diretiva `ng-class` usa a função `abaEstahSelecionada()` para que o elemento tenha a classe `active` apenas se a aba específica tiver sido selecionada.

O comportamento é o mesmo do exemplo 2-3, com a diferença que o código está mais limpo, mantendo a lógica no controller, ao invés de na view.