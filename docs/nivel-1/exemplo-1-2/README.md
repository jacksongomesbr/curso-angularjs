# Módulo ``loja``

Um aplicativo AngularJS pode ser organizado com base em um módulo (que representa o próprio aplicativo). A definição do módulo está contida em um arquivo do Javascript. 

Neste caso, o módulo ``loja`` está definido no arquivo ``app.js``.

Para a criação de um módulo é utilizada o método ``angular.module()`` cujos parâmetros são:

1. Nome do módulo
2. Dependências

O arquivo ``app.js`` contém o seguinte código:

```js
var app = angular.module('loja', []);
```

Assim:
1. Nome do módulo: loja
2. Dependências: \[\] (vetor sem elementos)

Para incorporar o módulo no HTML é necessário, primeiro, incluir o arquivo Javascript, por meio do elemento `script`.

```html
<html>
<head>
...
<script type="text/javascript" scr="app.js"></script>
...
</head>
</html>
```

Em segundo lugar, o elemento `html` deve ser modificado para indicar qual aplicativo é utilizado na "raiz" do documento.

```html
<html ng-app="loja">
...
```

O atributo `ng-app` não pertence ao padrão HTML, portanto, ele demonstra uma das formas de o AngularJS modificar o comportamento do HTML. Na prática, `ng-app` não é considerado como um atributo, mas como uma **diretiva**. 