# mentorama - projeto do módulo 4

Você deve criar uma página HTML que formate endereços. O usuário deve informar as seguintes informações:

- tipo de logradouro (Rua ou Avenida)
- nome do logradouro
- número da residência
- complemento
- bairro
- cidade
- estado
- CEP

Após informar as informações corretamente, o usuário deve receber uma mensagem do navegador com o seu endereço formatado da seguinte forma:

```html
Tipo de Logradouro Nome do Logradouro, número da residência - complemento -
bairro - cidade - estado CEP: CEP.
```

```html
Rua Floriano Peixoto, 477 - Bloco 2 Apto 91 - Jardim das Flores - São Paulo - SP
CEP: 08821-288
```

Caso não haja complemento, essa informação pode ser omitida do resultado final:

```html
Rua Floriano Peixoto, 477 - Jardim das Flores - São Paulo - SP CEP: 08821-288
```

_Observações:_

- Os tipos de logradouros permitidos devem ser apenas "Rua" ou "Avenida". Caso o usuário informe algo diferente, uma mensagem deve aparecer informando o erro: "Logradouro só pode ser Rua ou Avenida".
- Nome do logradouro, cidade e estado no formato final devem começar com a letra maiúscula (se pode resolver isso com as funções ensinadas ou procurar outra, mais específica)
- CEP deve ficar na linha separada.

**_Desafio_**

Nos projetos, são propostas tarefas difíceis, porém não obrigatórias. Todavia, é recomendável que dedique seu tempo e use suas habilidades para resolvê-las. O desafio deste projeto é:

- Se o usuário colocou o CEP sem "-", adicionar o "-".

Critérios de avaliação

Antes de enviar seu trabalho para revisão, repasse os critérios. Você conseguiu finalizar cada item da lista? Então, envie o projeto para avaliação.
