Nível 1: Iniciando
==================

## O que é o AngularJS?

* Um Framework JavaScript para adicionar interatividade ao HTML
* Um Framework Front-end (experiência do usuário, comportamento da interface gráfica e interação com o usuário)
* Diferente de abordagens de bibliotecas (como jQuery) e outros frameworks (como durandal e ember): modifica diretamente o HTML
* Data binding (vinculação de dados)
* Estruturas para manipulação do DOM
* Suporte para formulários e validação [de formulários]
* Novas formas de tratamento de eventos
* Agrupamento de HTML em componentes reutilizáveis

## O que você já precisa saber

* Obrigatório
	* HTML e CSS
	* Javascript
* Interessante
	* [Twitter] Bootstrap
	* Testes automáticos
	* BDD - Behavior Driven Development
	* TDD - Test Driven Development
* Não tão importante, mas bastante útil
	* jQuery
	* Ruby On Rails, Python, PHP etc.
	* Bancos de Dados

## Por que AngularJS?

Ao desenvolver web sites dinâmicos, ou melhor, web apps, o AngularJS...
- Ajuda na organização do Javascript
- Ajuda na criação de web sites ou web apps responsivos
- Trabalha bem com jQuery
- É fácil de testar

## O que são web sites ou web apps responsivos?
- Formato tradicional da web: atualização de página
	- Web browser solicita um recurso (página, arquivo etc.)
	- Servidor web responde
	- Repete
- Formato responsivo (geralmente chamado "one page web app")
	- Web browser solicita o aplicativo
	- Servidor responde
	- Web browser solicita dados ou partes de recursos
	- Servidor responde com dados (ou outros recurso adicionais associados)
	- Repete

## Outros requisitos de aplicações web modernas
- Software baseado em serviço e APIs
- Comunicação com outros tipos de dispositivos
- Internet das coisas
- Software com foco no front-end (e na experiência do usuário)
- Menor tempo de resposta (por isso o "responsivo")

## Uma visão geral do AngularJS
- [Template](https://docs.angularjs.org/guide/concepts#template)
- [Diretiva](https://docs.angularjs.org/guide/concepts#directive)
- [Model](https://docs.angularjs.org/guide/concepts#model)
- [Scopo](https://docs.angularjs.org/guide/concepts#scope)
- [Expressões](https://docs.angularjs.org/guide/concepts#expression)
- [Compilador](https://docs.angularjs.org/guide/concepts#compiler)
- [Filtro](https://docs.angularjs.org/guide/concepts#filter)
- [View](https://docs.angularjs.org/guide/concepts#view)
- [Data binding](https://docs.angularjs.org/guide/concepts#databinding)
- [Controller](https://docs.angularjs.org/guide/concepts#controller)
- [Injeção de Dependência (DI)](https://docs.angularjs.org/guide/concepts#di)
- [Injetor](https://docs.angularjs.org/guide/concepts#injector)
- [Módulo](https://docs.angularjs.org/guide/concepts#module)
- [Serviço](https://docs.angularjs.org/guide/concepts#service)

## Configurando o ambiente local
- Que software é necessário para trabalhar com o AngularJS?
	- Um editor de texto simples ou com formatação/coloração do código (exemplos: Notepad++, SublimeText)
- Download do AngularJS
	- http://angularjs.org
- Ou usar direto da CDN
	- https://ajax.googleapis.com/ajax/libs/angularjs/1.3.0/angular.min.js
- Ou usar Bower

```sh 
bower install angular#1.3.0
```

- Twitter Bootstrap
	- Download: http://getbootstrap.com/
	- CDN
		- https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css
		- https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js

Ver [exemplo-1-1](nivel-1/exemplo-1-1/readme).

## Módulos

Um aplicativo AngularJS requer um nível de organização que começa pela definição de um módulo. Isso faz com que o código se torne mais fácil de gerenciar, testar e ler. Além disso, no módulo são definidas dependências do aplicativo.

Veja: exemplo-1-2

## Expressões

Expressões permitem avaliar conteúdo dinamicamente, inserindo o resultado no HTML.

Veja o exemplo 1-3.

## Controllers

Controllers executam um papel importante no contexto do padrão MVC (Model-View-Controller) porque contém a lógica ou permitem definir o comportamento do aplicativo, por meio da utilização de funções e dados.

Veja o exemplo 1-4.

Até este ponto, o aplicativo dos exemplos começa a tomar forma, e é importante falar um pouco mais sobre ele:
* É um software para visualização de informações sobre produtos

Assim, o exemplo 1-4 começa a representar um pouco mais do propósito do aplicativo. Entretanto, os dados de produtos ainda não estão sendo apresentados. Para resolver isso, é necessário aprender sobre Data Binding.

## Data Binding

AngularJS possui uma forma poderosa de data binding. Se o conceito em inglês não é familiar, ele significa "vinculação de dados", o que faz com que dois elementos do padrão MVC conversem de forma mais inteligente, ou automática. Por meio do recurso de Data Binding, o controller define dados, que são apresentados na view.

Veja o exemplo 1-5.

## Diretiva `ng-show`

A diretiva `ng-show` fornece um comportamento bastante comum em aplicações web: apresentar ou ocultar elementos com base em expressões (condições).

Veja o exemplo 1-6.

## Diretiva `ng-hide`

De forma inversa à diretiva `ng-show`, a diretiva `ng-hide` oculta um elemento com base em uma expressão.

### Desafio 3

Modifique o aplicativo para que ele não exiba os  dados do produto se ele não estiver disponível em estoque. Se isso for verdade, deve ser apresentado um conteúdo semelhante ao seguinte:

```html
<h1>Nome do produto (indisponível)</h1>
```

## Mais de Data binding: arrays `ng-repeat`

Até o momento, o aplicativo `loja` apresenta um único produto. O mais interessante seria que ele apresentasse vários produtos. Para fazer isso, será utilizado o recurso de `array` do javascript e a diretiva `ng-repeat`.

Veja o exemplo 1-7.

  