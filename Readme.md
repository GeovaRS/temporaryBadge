<img style="text-align: center;" src="https://ik.imagekit.io/helderhsilva/NLW_Heat/NLWHEAT_OF-6qEm8SU.png?updatedAt=1634962005817" alt="NLW Logo">

## **O que será feito?**

> Será feito o desenvolvimento de um crachá com HTML5 e CSS3 como uma forma de esquentar a galera (Heat) para o próximo evento da Rocketseat, o Do While.

- Segue o Layout:

![NLW Heat](https://ik.imagekit.io/helderhsilva/NLW_Heat/NLWHeat_SpRvzLxMHN2.png?updatedAt=1634774720523)

<br>

## **Conceitos da Aula 1:**

### **HTML:**

Aula 1 - NLW Heat Origin
HTML = HyperText Markup Language

HyperText = é um texto com links

Markup = marcação/tags

Language = regras de uma linguagem

Comentários:

Comentários:

```HTML
<!--"Texto Aqui"-->
```

### **CSS:**

CSS = Cascading Stylesheet

Folha de estilo em cascata

Cascata é a ordem de aparecenimento dos elementos.
O elemento que entra por último é o elemento que tem mais força.

Comentários:

```css
/* "Texto aqui" */
```

<br>

## **Conceitos da Aula 2:**

### **HTML - Tags e Anatomia:**

![Tags HTML](https://ik.imagekit.io/helderhsilva/NLW_Heat/TagsHtml_lvQ6WPidA.png?updatedAt=1634775404870)

### **HTML - Aninhamento:**

- As tags devem ser fechadas corretamente. Por exemplo:

```HTML
<div>
  <h1> Correct Exemple </h1>
</div>
```

```HTML
<div>
  <h1> Incorrect Exemple </div>
</h1>
```

### **CSS - Seletores e anatomia:**

![Seletor Tag](https://ik.imagekit.io/helderhsilva/NLW_Heat/SeletorTag_CREx_zylSm.png?updatedAt=1634776191592)

- A imagem acima mostra um seletor de tag, mas existem diversos tipos de seletores. De id, de classe, entre outros.

### **CSS - Cascata:**

- Assim como dito na primeira aula, a cascata do css da a prioridade para o ultimo estilo aplicado.

```CSS
h1 {
  font-size: 1.5rem; /* Este não vai ser aplicado*/
}

h1 {
  font-size: 3.5rem; /* Este vai ser aplicado*/
}
```

### **CSS - Especificidade:**

- A especificidade pode alterar o funcionamento da cascata. Mas como?

![CSS Especificidade](https://ik.imagekit.io/helderhsilva/NLW_Heat/CSSEspecificidade_qsfQtwlmQ.png?updatedAt=1634776695735)

- A especificidade é a força do estilo, ou seja, o que é considerado primeiro. No caso o CSS inLine é o mais forte, caso tenha feito um estilo em linha e depois tentar aplicar na folha de estilo o que será considerado é o inLine.

- Dando sequencia, na folha de estilo, a ordem de maior força começa pelos IDs, depois as classes e por fim os seletores de elementos (que foi o que já vimos).

- Exemplo:

```CSS
a.button {
  background-color: hsl(20 36% 57%); /* Esse tem mais força pois fez uma junção de um seletor de elemento com um seletor de classe */
}

a.button {
  background-color: hsl(159 36% 57%); /* Este tem menos força, pois é apenas um seletor de classe*/
}
```

### **CSS - Unidades de medida e Responsivo:**

- Unidade de medidas estáticas geralmente são pixels, portanto coisas fixas, então pode ser que quando houver uma mudança de tela o componente não sofra alteração. Já com as unidades relativas há uma adaptação a mudança.

![CSS Relative](https://ik.imagekit.io/helderhsilva/NLW_Heat/RelativeUnit_HxtrWUW6y.gif?updatedAt=1634777774530)

- Responsidade é praticamente a adaptação de layouts, ou seja adapatar a telas grandes e pequenas.

![CSS Breakpoints](https://ik.imagekit.io/helderhsilva/NLW_Heat/Breakpoints_gknI-976Or.gif?updatedAt=1634777883364)

### **CSS - Box Model:**

- Padding: preenchimento interno à caixa;
- Border: fronteira da caixa;
- Margin: preenchimento externo à caixa.

![Box Model](https://ik.imagekit.io/helderhsilva/NLW_Heat/BoxModel__Si45MLqScLO.png?updatedAt=1634819944146)

<br>

### **CSS - Layout:**

![Layout](https://ik.imagekit.io/helderhsilva/NLW_Heat/Layout_F9b_pMIfE.png?updatedAt=1634825772119)

<br>

## **Conceitos da Aula 3:**

### **JavaScript:**

> Linguagem de programação para web.

- ### **Fluxo Natural da Aplicação:**

O computador lê os comandos seguindo as ordens:

- Da esquerda para a direita;
- De cima para baixo; e
- Uma instrução após a outra;

```javascript
alert('oi') // Faz essa caixa primeiro e lê o oi.
alert('hi') // Em seguida muda para a linha de baixo, faz a caixa e lê o hi.
alert('javascript') // Por fim executa a última caixa.
```

Temos dois lugares para chamar o JavaScript.

1. Antes de fechar a tag "head" no começo do código. Nesse caso o JavaScript vai ser lido antes do código carregar.
2. No fim do código, antes de fechar a tag "body". nesse caso o código é lido e carregado primeiro e em seguinda o JavaScript é executado.

<br>

- ### **Tipos de dados primitivos:**

> Dentro da linguagem de programação nos recebemos e passamos dados. Mas o que são esses dados?

- Strings:

```javascript
'Helder Henrique'
'1234234'
//strings são dadas entre aspas
```

- Numbers:

```javascript
234234234
9 + 1
//numbers são literalmente apenas números
```

- Boleans:

```javascript
true
false
//boleans retornam false ou true
```

<br>

- ### **Váriaveis:**

> São usadas para guardar os dados para que possam ser transitados de um lugar para outro.

> As variáveis podem ser do tipo **let** ou **const**.

> Variáveis do tipo let pode ter seu valor alterado.
> Variáveis do tipo const não podem ter seu valor alterado.

- Exemplo:

```javascript
  // Imagine que a variável é uma caixinha e que o nome dado para ela é a sua identificação.

  const name: "Helder Henrique" //Não pode ser alterado
  let phone: 12345678 //Pode ser alterado.
  let acceptTerm: true //Pode ser alterado.

  name: "Henrique" //Vai dar erro, pois name é uma const

  phone: 567489 //vai ser mudado já que phone é do tipo let

  //Quando der erro, o mesmo aparecerá no "console"
```

<br>

- ### **Boas práticas de escrita:**

> São boas práticas de escrita:

- Os nomes de variáveis serem curtos e descritivos do tipo de informação que vão guardar, ou seja, intuítivos;
- Serem escritos em Inglês, visto a linguagem universal; e
- Deve ser: camelCase, PascalCase ou snake_case.

<br>

- ### **Tipos de dados estruturados:**

  - **Funções:**

  > Está relacionado as ações que serão feitas.

  > É uma forma de agrupar os comandos que daremos para o JavaScript.

  ```javascript
  // Existem diversos modos de criar uma funçao:

  function showMeSomething() {
    alert(user.name)
  }

  // Para executar/chamar a função criada:

  showMeSomething()

  // Podemos ainda passar um dado para as funções, para isso criamos uma variável dentro da função para receber o contúdo

  function showMeSomething(texto) {
    alert(texto)
  }

  // Para chmar ficaria assim:

  showMeSomething('hello guys')

  // hello guys ficaria salvo em texto e alert chamaria o texto em
  ```

  <br>

  - **Objetos:**

  > Variáveis do tipo objeto possuem propriedade e valor, semelhante ao css.
  > Nada mais é que uma forma de guardar vários dados que possuem uma correlação dentro de uma única variável.

  ```javascript
  const user = {
    name: 'Helder Henrique',
    phone: 12345678,
    accept: true
  }

  //Quando quisermos mostrar algum dado que está dentro de um objeto devemos chamar usando um "." Por exemplo:

  alert(user.name)
  ```

  <br>

  - **Repetições (loop):**

  > Conhecido como "for". Assim que colocar o comando for no código ele repetirá esse comando até que chegue em uma instrução de parada.

  ```javascript
  for (let i = 0; i <= 10; i++) {
    alert(i)
  }

  //Enquanto a variável i for menor ou igual a 10 o código vai se repetindo e executando para cada incrementação de i (i++)
  ```

<br>

### **DOM:**

- DOM ou Document Object Model (Modelo de Documento do Objeto)

- O navegador "olha" para o site que está rodando o HTML e os processos que estão sendo executados na aplicação e cria "por de baixo dos panos" um documento com um mapeamento dos objetos (nesse caso seria os elementos do HTML) que existem no site para ele se organizar.

- Através do JavaScript conseguimos acessar esse documento que o navegador cria e consegue ter acesso aos elementos HTML que foram mapeados.

<br>

## **Conceitos da Aula 4:**

### **API:**

- Interface de Programação de Aplicações ou Interface de Programação de Aplicação, cuja sigla API provém do Inglês Application Programming Interface. As APIs são um conjunto de padrões que fazem parte de uma interface e que permitem a criação de plataformas de maneira mais simples e prática para desenvolvedores. A partir de APIs é possível criar softwares, aplicativos, programas e plataformas diversas.

<br>

### **JSON:**

- Em computação, JSON, um acrônimo de JavaScript Object Notation. O formato JSON é utilizado para estruturar dados em formato de texto e permitir a troca de dados entre aplicações de forma simples, leve e rápida. ... Atualmente, esse formato é suportado por diversos tipos de linguagem de programação, além de ser uma alternativa mais leve que o modelo XML.

<br>

## **Conceitos da Aula 5:**

### **JavaScript:**