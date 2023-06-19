let pokemonList = [
  {
    name: "Pikachu",
    height: 0.4,
    weight: 6,
    types: ["Electric"],
    hp: 35,
    attack: 55,
    defense: 40,
    speed: 90,
    spAtk: 50,
    spDef: 50,
  },
  {
    name: "Bulbasaur",
    height: 0.7,
    weight: 6.9,
    types: ["Grass", "Poison"],
    hp: 45,
    attack: 49,
    defense: 49,
    speed: 45,
    spAtk: 65,
    spDef: 65,
  },
  {
    name: "Charmander",
    height: 0.6,
    weight: 8.5,
    types: ["Fire"],
    hp: 39,
    attack: 52,
    defense: 43,
    speed: 65,
    spAtk: 60,
    spDef: 50,
  },
  {
    name: "Squirtle",
    height: 0.5,
    weight: 9,
    types: ["Water"],
    hp: 44,
    attack: 48,
    defense: 65,
    speed: 43,
    spAtk: 50,
    spDef: 64,
  },
  {
    name: "Caterpie",
    height: 0.3,
    weight: 2.9,
    types: ["Bug"],
    hp: 45,
    attack: 45,
    defense: 30,
    speed: 45,
    spAtk: 20,
    spDef: 20,
  },
  {
    name: "Weedle",
    height: 0.3,
    weight: 3.2,
    types: ["Bug", "Poison"],
    hp: 40,
    attack: 35,
    defense: 30,
    speed: 50,
    spAtk: 20,
    spDef: 20,
  },
  {
    name: "Pidgey",
    height: 0.3,
    weight: 1.8,
    types: ["Flying", "Normal"],
    hp: 40,
    attack: 45,
    defense: 40,
    speed: 56,
    spAtk: 35,
    spDef: 35,
  },
  {
    name: "Rattata",
    height: 0.3,
    weight: 3.5,
    types: ["Normal"],
    hp: 30,
    attack: 56,
    defense: 35,
    speed: 72,
    spAtk: 25,
    spDef: 35,
  },
];

document.write(`<ul>`);
pokemonList.forEach(function(pokemon) {
  let pokemonText = `${pokemon.name} (height: ${pokemon.height})`;

  if (pokemon.height > 0.4) {
    pokemonText = `${pokemonText} - Wow, that's big!`;
  }
  
  document.write(`<li>${pokemonText}</li>`);
});
document.write(`</ul>`);