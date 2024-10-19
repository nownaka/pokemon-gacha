import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../components/atoms/Button";
import "./Gacha.css";

const Gacha = () => {
  const [name, setName] = useState<string>();
  const [pokedexId, setPokedexId] = useState<number>();
  const [image, setImage] = useState<string>();

  // ランダムにポケモン図鑑Noを取得
  const getRandomPokedexId = () => {
    const _pokedexId = Math.floor(Math.random() * (151 - 1 + 1)) + 1;
    setPokedexId(_pokedexId);
  };

  // pokedexIdが更新されるたびに呼び出す
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokedexId}`)
      .then((res) => res.data)
      .then((pokemon) => {
        console.log(pokemon);
        setName(pokemon.name);
        setImage(pokemon.sprites.other["official-artwork"].front_default);
      })
      .catch((error) => console.error(error));
  }, [pokedexId]);

  if (!pokedexId) {
    return (
      <div className=" Gacha">
        <header>
          <h1>Gacha</h1>
        </header>
        <Button name="Execute" onClick={getRandomPokedexId} />
      </div>
    );
  }

  return (
    <div className="Gacha">
      <header>
        <h1>Gacha</h1>
      </header>
      <p>
        <img className="Pokemon-image" src={image} alt="Pokemon-image" />
      </p>
      <section className="Pokemon-information">
        <p>No: {pokedexId}</p>
        <p>{name}</p>
      </section>
      <Button name="Execute" onClick={getRandomPokedexId} />
    </div>
  );
};

export default Gacha;
