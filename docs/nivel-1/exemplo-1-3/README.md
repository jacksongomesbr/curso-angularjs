# Expressões

Expressões são representadas diretamente no HTML, entre `{{` e `}}`. Exemplos:

```html
<p>
José tem {{ 1 + 4}} anos
</p>
``` 

Ao interpretar a expressão, será gerada a saída:

```html
<p>
José tem 5 anos
</p>
``` 

Na prática, embora o browser receba do servidor web o conteúdo HTML que inclui as expressões, o AngularJS avalia as expressões presentes no HTML e, por meio do DOM, manipula a árvore de elementos do documento, gerando uma nova saída.

Outro exemplo, agora com operações que envolvem strings:

```html
<p>
{{ "Meu " + "nome " + "é " + "José"}}!
</p>
``` 

O que gera:

```html
<p>
Meu nome é José!
</p>
``` 