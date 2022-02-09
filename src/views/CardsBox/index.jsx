import { useEffect, useState } from "react";
import { Card } from "./components/Card";

import StyleBox from "./stylecardsBox.module.css";

function CardsBox() {
  const [listCharacters, setListCharacter] = useState([]);

  /*useEffect(() => {
    const consumeApi = async () => {
      fetch("https://rickandmortyapi.com/api/character")
        .then((result) => result.json())
        .then((data) => {
          setListCharacter(data.results);
        });
    };
    consumeApi();*/

  useEffect(() => {
    async function consumeApi() {
      const info = await fetch("https://rickandmortyapi.com/api/character");
      const outcome = await info.json();
      const data = setListCharacter(outcome.results);
      return data;
    }
    consumeApi();
  }, []);

  return (
    <div className={StyleBox.Card}>
      {listCharacters.map((element) => (
        <Card
          key={element.id}
          image={element.image}
          name={element.name}
          status={element.status}
        />
      ))}
      ;
    </div>
  );
}
export { CardsBox };
