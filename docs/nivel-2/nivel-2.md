Nível 2: Filtros, Diretivas e código limpo
==================

## Diretivas principais e favoritas

### `ng-app`

A diretiva `ng-app` é utilizada para definir o escopo de um aplicativo (módulo).

### `ng-controller`
 
A diretiva `ng-controller` insere um controller na página HTML (integração Controller e View).

### `ng-show` / `ng-hide`

As diretivas `ng-show` e `ng-hide` são usadas para, respectivamente, apresentar e ocultar elementos com base em expressões (condicionais).

### `ng-repeat`

A diretiva `ng-repeat` é utilizada para repetir um elemento, com base em uma expressão que indica: "repetir para cada elemento no array".

## Filtros

Filtros realizam o papel de transformar valores. Por exemplo, o aplicativo `loja`, até o momento, apresenta o preço do produto de forma numérica. Um filtro pode ser utilizado para apresentar o preço de forma "em moeda".

Veja exemplo 2-1.

### Outros filtros

Outros filtros interessantes são:

* `date`: usado em formatação de datas. Exemplo: `{{data | date }}`.
* `uppercase` e `lowercase`: usados para modificar o texto para maiúsculo e minúsculo, respectivamente. Exemplo: `{{produto.nome | uppercase}}`.
* `limitTo` : usado para limitar o tamanho de uma string ou a repetição da diretiva `ng-repeat`. Exemplos:
	* `{{produto.descricao | limitTo:60}}`
	* `<div ng-repeat="produto in loja.produtos | limitTo:3>`
* `orderBy` ordena um array em ordem crescente. Exemplo: 
	* `<div ng-repeat="produto in loja.produtos | orderBy:'preco'>`
	* * `<div ng-repeat="produto in loja.produtos | orderBy:'-preco'>` (neste caso, ordena de forma decrescente, por causa do `-preco`)   

### Adicionando imagens dos produtos

Melhorando a interface do aplicativo `loja`, podem ser apresentadas imagens dos produtos. Para isso, é necessário utilizar a diretiva `ng-src`.

Veja o exemplo 2-2.

## Mais diretivas

O aplicativo `loja` poderia se tornar mais interativo, apresentando mais informações dos produtos, como especificações e opiniões dos clientes, além do nome, da descrição e do preço.

Veja o exemplo 2-3.

# Limpando código

O código do exemplo 2-3 contém lógica diretamente na view. Embora o funcionamento esteja correto, é interessante retirar a lógica da view. Isso é feito limpando o código e movendo a lógica para um controller.

Veja o exemplo 2-4. 

## Desafio 4

Modifique o aplicativo para permitir um comportamento interativo nas compras de produtos. Cada produto deve ter uma quantidade em estoque. No momento do clique no botão "comprar", a quantidade em estoque deve ser decrementada em uma unidade. O comportamento continua o mesmo de antes (se não houver quantidade suficiente em estoque, o botão não deve ser visível -- ou pode ser desabilitado).