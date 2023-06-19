let pokemonRepository = (function() {
  let pokemonList = [
  ];

  let fetchURL = 'https://pokeapi.co/api/v2/pokemon/';

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      console.log(pokemon)
    })
    
  }

  function addListItem(pokemon) {
    let ul = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
  
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('poke-button');
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    })
  
    listItem.appendChild(button);
  
    ul.appendChild(listItem);
  }

  function loadList() {
    return fetch(fetchURL).then(function(response) {
      return response.json();
    }).then(function(json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        }
        add(pokemon)
      })
    });
  }

  function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl).then(function(response) {
      return response.json();
    }).then(function (json) {
       pokemon.imgUrl = json.sprites.front_default;
       pokemon.height = json.height;
       return pokemon;
    });
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  }
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon)
  })
})

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon)
});