# Filtro `currency`

O filtro `currency` formata a saída de forma que ela seja numérica. Para aplicar o filtro, basta usar a sintaxe:

```
expressão | currency
```

Por exemplo:

```html
<div ng-repeat="produto in loja.produtos">
	<h1>{{produto.nome}}</h1>
	<p>{{produto.preco | currency}}</p>
	<p>{{produto.descricao}}</p>
	<button ng-show="loja.produto.disponivelEmEstoque">Comprar</button>
	<hr></hr>
</div>
```

Neste caso, a saída apresentará o preço do produto usando formato de moeda:

```
<h1 ... >
...
$3000,00
...
</h1>
```

Entretanto, embora o filtro `currency` funcione, o AngularJS não está automaticamente habilitado para internacionalização. Para apresentar o conteúdo no formato `pt-br` (português do Brasil) é necessário fazer download do arquivo de localização, que pode ser obtido neste endereço: https://github.com/angular/angular.js/tree/master/src/ngLocale, neste caso, para `pt-br` deve-se fazer download do arquivo `angular-locale_pt-br.js`. No caso deste repositório, o arquivo é mantido na mesma pasta do angular (`vendor/angularjs/`).

Uma vez que o arquivo esteja acessível, basta incluí-lo no HTML, logo depois do arquivo javascript do Angular:

```html
<!DOCTYPE html>
<html ng-app="loja" lang="pt-br">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../../../vendor/bootstrap/css/bootstrap.min.css" />
	<script type="text/javascript" src="../../../vendor/angularjs/angular.min.js"></script>
	<script type="text/javascript" src="../../../vendor/angularjs/angular-locale_pt-br.js"></script>
...
```

