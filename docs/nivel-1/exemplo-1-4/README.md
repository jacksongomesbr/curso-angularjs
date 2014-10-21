# Controllers

Como controllers definem o comportamento do aplicativo, eles são definidos no próprio aplicativo (módulo), da seguinte forma:

```js
(function(){
var app = angular.module('loja', []);
app.controller('LojaController', function(){
});
})();
```

Aqui está sendo utilizado o recurso do Javascript chamado **closure**, que nada mais é do que a definição de uma função anônima que será chamada no momento que o código for interpretado pelo browser.


## Incorporando o Controller no HTML

Para incorporar o controller no HTML é necessário utilizar a diretiva ``ng-controller``. Exemplo:

```html
<!DOCTYPE html>
<html ng-app="loja" lang="pt-br">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="../../../vendor/bootstrap/css/bootstrap.min.css" />
	<script type="text/javascript" src="../../../vendor/angularjs/angular.min.js"></script>
	<script type="text/javascript" src="../../../vendor/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="app.js"></script>
</head>
<body>
<div ng-controller="LojaController as loja">
	<h1>Nome do Produto</h1>
	<p>Preço</p>
	<p>Descrição</p>
</div>

</body>
</html>
```

A diretiva `ng-controller` foi utilizada no elemento `div`. A instrução `as` indica que o controller está sendo renomeado no escopo deste elemento `div` passando a se chamar `loja`. Isso é feito para simplificação do código.