import React, { useEffect, useState } from "react";

interface PokemonList {
  name: string;
  url: string;
}

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
}

async function getPokemons(): Promise<PokemonList[]> {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const data = await response.json();
  return data.results;
}

async function getPokemonData(url: string): Promise<PokemonData> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonData[]>([]);

  useEffect(() => {
    getPokemons().then((pokemonList) => {
      Promise.all(
        pokemonList.map((pokemon) => getPokemonData(pokemon.url))
      ).then((pokemonData) => setPokemons(pokemonData));
    });
  }, []);

  if (!pokemons.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pokemons.map((pokemon, index) => (
        <div key={index}>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ))}
    </div>
  );
}

export default PokemonList;
