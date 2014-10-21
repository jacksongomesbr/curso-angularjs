# Apresentando imagens dos produtos

A apresentação de imagens dos produtos requer a modificação dos dados dos produtos, incluindo a propriedade `imagem`:

```js
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
```

Além disso, obviamente, é necessário ter os arquivos de imagens dos produtos na pasta `imagens`.

Para apresentar as imagens dos produtos, é necessário modificar a listagem de produtos:

```html
<!DOCTYPE html>
...
<body>
<div class="container">
	<div ng-controller="LojaController as loja">
		<div ng-repeat="produto in loja.produtos" class="produto row">
			<div class="col-md-3">
				<img src="{{produto.imagem}}" class="img-responsive" />
			</div>
			<div class="col-md-9">
				<h1>{{produto.nome}}</h1>
				<p>{{produto.preco | currency}}</p>
				<p>{{produto.descricao}}</p>
				<button ng-show="loja.produto.disponivelEmEstoque">Comprar</button>
			</div>
			<hr></hr>
		</div>
	</div>
</div>
</body>
</html>
```

Assim, a diretiva `ng-src` é usada no elemento `img` porque, se fosse usado o atributo `src` do HTML, o browser tentaria encontrar a imagem especificada pelo valor do atributo antes do Angular analisar o valor como uma expressão.