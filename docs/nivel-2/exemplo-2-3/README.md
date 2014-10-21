# Apresentando mais informações dos produtos

Além de apresentar nome, preço e descrição, o aplicativo `loja` pode ser modificado para apresentar especificações e opiniões dos clientes. Para fazer isso, pode-se melhorar a interface do aplicativo, usando recursos do Bootstrap para apresentar informações em abas.

O primeiro passo é modificar os dados dos produtos, adicionando novos atributos (`especificacoes` e `opinioes`:

```js
(function(){

var app = angular.module('loja', []);

var produtos = [
	{
		nome: 'Impressora 3D',
		preco: 5000,
		descricao: 'Uma ótima impressora 3D!',
		disponivelEmEstoque: false,
		imagem : "imagens/impressora-3d.jpg",
		especificacoes : "Detalhes da impressora 3D",
		opinioes: ""
	}

...

})();
```

O segundo passo é modificar a apresentação do aplicativo, usando o recurso de navegação do Bootstrap para adicionar interatividade com o usuário e organizar a informação na tela:

```html
<section ng-init="tab = 1">
	<ul class="nav nav-pills">
		<li ng-class="{ active:tab === 1}"><a href ng-click="tab = 1">Descrição</a></li>
		<li ng-class="{ active:tab === 2}"><a href ng-click="tab = 2">Especificações</a></li>
		<li ng-class="{ active:tab === 3}"><a href ng-click="tab = 3">Opiniões dos clientes</a></li>
	</ul>
</section>

<div class="panel" ng-show="tab === 1">
	<h4>Descrição</h4>
	<p>{{produto.descricao}}</p>
</div>

<div class="panel" ng-show="tab === 2">
	<h4>Especificações</h4>
	<p>{{produto.especificacoes}}</p>
</div>

<div class="panel" ng-show="tab === 3">
	<h4>Opiniões</h4>
	<p>{{produto.opinioes}}</p>
</div>
```

Neste caso, o HTML precisou passar por uma série de modificações para que o aplicativo funcionasse. Na própria view foi necessário adicionar lógica para controlar a visualização de cada informação do produto.

A primeira modificação requer a utilização do recurso chamado **two-way data binding** ou seja, um **data binding** de mão dupla. Este recurso permite gerar comportamento da interface gráficar ao modificar o valor de uma variável. Neste caso, no elemento `section` está sendo utilizada a diretiva `ng-init` para inicializar uma variável chamada `tab` com o valor `1`.

A segunda modificação é fazer com que o clique em cada item da lista de navegação execute uma ação. Neste caso, a ação é a modificação do valor da variável `tab`, conforme o item de navegação clicado. Para executar esta ação, é utilizada a diretiva `ng-click`, que funciona, basicamente, como o evento `onclick` do HTML/DOM.

A terceira modificação é fazer com que cada informação do produto somente seja apresentada conforme o item de navegação clicado. Para isso, cada elemento `div` correspondendo a uma informação do produto usa a diretiva `ng-show`, cuja expressão é baseada no valor da variável `tab`.

Por último, para indicar qual item de navegação está ativo, é utilizada a diretiva `ng-class` que avalia uma expressão e gera o valor para o atributo `class` do HTML. Neste caso, cada item da lista de navegação possui uma diretiva `ng-class` com uma expressão que corresponde ao valor da variável `tab`. Por exemplo, para o primeiro item da lista:

```
<li ng-class="{ active:tab === 1}"><a href ng-click="tab = 1">Descrição</a></li>
``` 

Isso indica que o elemento `li` possuirá o atributo  `class="active"` se a variável `tab` possuir valor `1`. Em detalhes, o valor da diretiva `ng-class` está entre `{}` porque está sendo usada a sintaxe de mapa. Nesta sintaxe, a expressão é convertida para HTML considerando que somente estarão contidos no mapa elementos que tenham valor `true`. Neste caso, o mapa irá conter o elemento/valor `active` com base na expressão `tab === 1` que é avaliada como `true` ou `false`.