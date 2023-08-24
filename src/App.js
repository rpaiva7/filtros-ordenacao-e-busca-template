import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
import { useState } from "react";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;

// RESOLUÇÃO USANDO IF >>>>>>>>>>>>>>>>>

/* function App() {
  const [id, setId] = useState("") //Criei o useState (estado) do id e estou enviando ele via props no Header abaixo, dentro do return (JSX)

  const pokemonFiltrado = pokemons.filter((pokemon) => {
    if(pokemon.id === id) {
      return pokemon
    }
  }).map((pokemon) => {
    return <PokemonCard
    cardColor={getColors(pokemon.type[0])}
    key={pokemon.id}
    pokemon={pokemon}
  />
  })

  const todosPokemons = pokemons.map((pokemon) => {
    return <PokemonCard
    cardColor={getColors(pokemon.type[0])}
    key={pokemon.id}
    pokemon={pokemon}
  />
  })

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} />
      <CardsContainer>
         {pokemons.filter((pokemon) => {
          if(pokemon.id === id){
            return pokemon   
          }

        }).map((pokemon) => {
          return <PokemonCard
          cardColor={getColors(pokemon.type[0])}
          key={pokemon.id}
          pokemon={pokemon}
        />
        })}
      </CardsContainer>
    </>
  );
}

export default App; */

// O filter vem antes do map no return. 
// Filter é um grande if. 
// Posso encadear vários filters na sequência e somente após o último filter é que eu insiro o .map. O map sempre vem depois do filter.   
// A Lógica do filter nesse exercício é: Se o pokemon.id for igual ao id do meu estado (useState), que o usuário está digitando, me retorne esse pokemon que tu achou com o mesmo valor. Nesse caso, como o id, que é meu estado, está vazio (entre aspas) a tela ficará em branco, e renderizará o card somente quando eu pesquisar pelo número do id.
// A lógica do filter é: se o id que o usuário digitou existir nesse array (json) de pokemon, me retorne o pokemon com esse id.
// O filter filtra entre o verdadeiro ou falso e devolve o que for verdadeiro.
// No filter ou eu aceito uma função de fora ou eu declaro a função dentro dele mesmo. Neste exercício declaramos a função dentro dele.

/* Filter, map e sort recebem como parâmetro um callback, que é uma função. O parâmetro é o que está entre parênteses. No Exemplo abaixo o parâmetro é pokemon, que é um grande array (json) com vários objetos (cards de pokemons):

.filter((pokemon) => {

  }
  ) */

/* O parâmetro da props é como se fosse uma variável. Nome da variável + o que estou armazenando na variável.

Ex. const nome = 'Renan' 

Numa props <Header id={id} /> o primeiro id seria o nome da variável e o segundo id, que está entre chaves, seria o valor que a variável está armazenando. Geralmente deixamos o nome e o valor do parâmetro da props com o mesmo nome para facilitar a localização no código. */

// Array, passe por cada índice e me devolva algo chamado pokemon


// RESOLUÇÃO USANDO TERNÁRIO >>>>>>>>>>>>>>>>>

/* function App() {
  const [id, setId] = useState("") 

  const pokemonFiltrado = pokemons.filter((pokemon) => {
    if(pokemon.id === id) {
      return pokemon
    }
  }).map((pokemon) => {
    return <PokemonCard
    cardColor={getColors(pokemon.type[0])}
    key={pokemon.id}
    pokemon={pokemon}
  />
  })

  const todosPokemons = pokemons.map((pokemon) => {
    return <PokemonCard
    cardColor={getColors(pokemon.type[0])}
    key={pokemon.id}
    pokemon={pokemon}
  />
  })

  return (
    <>
      <GlobalStyle />
      <Header id={id} setId={setId} />
      <CardsContainer>
       {
        id === "" ? todosPokemons : pokemonFiltrado  
       }
       </CardsContainer>
    </>
  );
}

export default App; */


/* A lógica do ternário (id === "" ? todosPokemons : pokemonFiltrado) é: 

id é igual a vazio? Se sim, me retorne a variável todosPokemons. Se não, me retorne a variável pokemonFiltrado. */

// String vazia "" é um valor falso. Nesse caso eu posso perguntar no ternário se id realmente existe, se é um valor verdadeiro, se é um número não negativo, e escreveria dessa forma: !id ? todosPokemons : pokemonFiltrado

// Ternário com map e filter - outra forma de solução além do include.
// Primeiro eu crio a variável do filter e depois a do map.
// Eu criei as variáveis pokemonFiltrado e todosPokemons fora do return para ser possível compará-las, e as comparei no ternário dentro da tag <CardsContainer> no return.


// RESOLUÇÃO USANDO INCLUDES >>>>>>>>>>>>>>>>>

/* function App() {
  const [id, setId] = useState("") 

const pokemonFiltrado = pokemons.filter((pokemon) => {
  if(pokemon.id === id) {
    return pokemon
  }
}).map((pokemon) => {
  return <PokemonCard
  cardColor={getColors(pokemon.type[0])}
  key={pokemon.id}
  pokemon={pokemon}
/>
})

const todosPokemons = pokemons.map((pokemon) => {
  return <PokemonCard
  cardColor={getColors(pokemon.type[0])}
  key={pokemon.id}
  pokemon={pokemon}
/>
})

return (
  <>
    <GlobalStyle />
    <Header id={id} setId={setId} />
    <CardsContainer>
       {pokemons.filter((pokemon) => {

          return pokemon.id.includes(id)

       }).map((pokemon) => {
        return <PokemonCard
        cardColor={getColors(pokemon.type[0])}
        key={pokemon.id}
        pokemon={pokemon}
      />
      })}
    </CardsContainer>
  </>
);
}

export default App; */

// o includes pode substituir o if. Ele percorre todo o array e retorna o que foi digitado na pesquisa
// o id de cada card de pokemon está no arquivo pokemon.json
// includes só trabalha com string, e eu sei que é uma string pq o useState do id está com aspas vazias


// Posso resolver o exercício usando o if, o includes ou o ternário. O If deixa a tela em branco e só mostra o card do pokemon quando eu digito o id na pesquisa. O ternário e o includes permitem mostrar todos os cards quando nada for digitado e depois filtrar e mostrar na tela o card do id digitado. 

/* O arquivo json é um grande array com muitos objetos dentro dele. É muito parecido com a resposta que recebemos da API. Quando estivermos buscando alguma coisa na API pro nosso site ela vai devolver nessa forma: um grande array com muitos objetos dentro dele, com id, nome, etc, e nós no front-end tratamos essa informação e jogamos na tela para o usuário. No caso acima, cada objeto é um pokémon diferente. */

//_______________________________________

/* FILTROS, ORDENAÇÃO E BUSCA

A partir desta dinâmica, iremos verificar:

-> Funções de array (.map e .filter)
-> Aplicação de filtros no React
-> Encadeamento de funções de array


Aplicando Filtro por id

Temos uma lista de 99 pokemons na tela, cada pokemon é representado pelo objeto ao lado, assim, podemos aplicar alguns filtros:

-> Filtro por id;
-> Filtro por nome;

1º Passo: 

- A primeira coisa que precisamos fazer é controlar o input de busca por id que existe dentro do Header.js e deixar o estado correspondente dentro do App.js.
- Crie 1 estado no App.js e passe este estado para o Header.js via props

2º Passo: 

Você vai perceber que existe um .map dentro do App.js que renderiza toda a lista de pokemons. Esse map retorna um componente <PokemonCard/> para cada pokemon. É antes desse map que precisamos aplicar o nosso filtro. 

3º Passo - Definindo as condições de filtragem:

Agora precisamos fazer com que o filtro faça uma checagem se o que o usuário digitou é igual ao id de algum pokemon. 


EXERCÍCIO

Chegou a sua vez de implementar um filtro! 
Implemente o filtro por nome do Pokemon.

- Perceba que você pode encadear mais esse filtro logo após o que já implementamos. */

function App() {
  const [id, setId] = useState("") 
  const [nome, setNome] = useState("")   

const pokemonFiltrado = pokemons.filter((pokemon) => {
  if(pokemon.id === id) {
    return pokemon
  }
}).map((pokemon) => {
  return <PokemonCard
  cardColor={getColors(pokemon.type[0])}
  key={pokemon.id}
  pokemon={pokemon}
/>
})

const todosPokemons = pokemons.map((pokemon) => {
  return <PokemonCard
  cardColor={getColors(pokemon.type[0])}
  key={pokemon.id}
  pokemon={pokemon}
/>
})

return (
  <>
    <GlobalStyle />
    <Header id={id} setId={setId} nome={nome} setNome={setNome} />
    <CardsContainer>
       {pokemons.filter((pokemon) => {
        return pokemon.id.includes(id)
       }).filter((pokemon) => {
        return pokemon.name.english.toLowerCase().includes(nome.toLowerCase())
       })
       
       
       .map((pokemon) => {
        return <PokemonCard
        cardColor={getColors(pokemon.type[0])}
        key={pokemon.id}
        pokemon={pokemon}
      />
      })}
    </CardsContainer>
  </>
);
}

export default App;

// Quando eu adiciono toLowerCase no filter eu consigo renderizar na tela o card do pokemon mesmo que eu digite o nome dele em letras maiúsculas ou minúsculas.