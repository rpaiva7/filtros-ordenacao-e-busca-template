import React from "react";
import { Container } from "./styles";

const Header = ({id, setId, nome, setNome}) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];
 
  const onChangeId = (event) => {
    setId(event.target.value)
  }

  const onChangeNome = (event) => {
    setNome(event.target.value)
  }

  console.log(nome);
  //Sempre que essa função recebe um parâmetro dentro de parênteses eu preciso inserir a função com seta dentro da tag que eu quero no return abaixo, nesse caso no onChange da tag input.

  return (
    <Container>
      <input type="number" placeholder="Buscar por id" onChange={(event)=> onChangeId(event)} />
      <input type="text" placeholder="Buscar por nome" onChange={(event)=> onChangeNome(event)} />
      <select>
        <option value="">Ordenar</option>
        <option value="">Crescente</option>
        <option value="">Decrescente</option>
      </select>
      <select name="tipo" id="tipo">
        <option value="">Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
