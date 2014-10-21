# Diretiva `ng-show`

A diretiva `ng-show` permite ocultar ou exibir elementos com base em expressões. Na prática, a diretiva é usada como um atributo cujo valor é uma expressão avaliada pelo Angular como `true` ou `false`. Exemplo:

```html
<button ng-show="1 == 1">Comprar</button>
```

Como a expressão ``1 == 1`` sempre avalia como `true`, o elemento `button` sempre estará visível. Importante notar que, embora o conteúdo da diretiva seja uma expressão, não se deve usar a mesma sintaxe anterior, entre `{{` e `}}`.

O objeto `produto` foi modificado para possuir um atributo `disponivelEmEstoque`:

```js
var produto = {
	nome: 'Impressora 3D',
	preco: 5000,
	descricao: 'Uma ótima impressora 3D!',
	disponivelEmEstoque: false,
};
```

Assim, um botão é adicionado no HTML para permitir comprar o produto, mas ele só deve estar visível quando o atributo `disponivelEmEstoque` possuir valor `true`.

```html
<div ng-controller="LojaController as loja">
	<h1>{{loja.produto.nome}}</h1>
	<p>R$ {{loja.produto.preco}}</p>
	<p>{{loja.produto.descricao}}</p>
	<button ng-show="loja.produto.disponivelEmEstoque">Comprar</button>
</div>
```

## Desafio 2

Como a diretiva `ng-show` avalia uma expressão, o mesmo vale para uma expressão que é composta pelo retorno de uma função. Assim, ao invés de fazer com que o botão seja apresentado com base no valor do atributo `disponivelEmEstoque` modifique o objeto `produto`, incluindo:
* Um atributo `quantidadeEmEstoque`
* Uma função `disponivelEmEstoque()` que retorna `true` se o atributo `quantidadeEmEstoque` tiver valor maior do que `0` ou `false`, caso contrário.