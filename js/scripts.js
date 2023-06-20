let pokemonRepository = (function () {
  let pokemonList = [];

  let fetchURL = "https://pokeapi.co/api/v2/pokemon/";

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
      showModal(pokemon);
    });
  }

  function addListItem(pokemon) {
    let ul = document.querySelector(".pokemon-list");
    let listItem = document.createElement("li");

    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("poke-button");
    button.addEventListener("click", function (event) {
      showDetails(pokemon);
    });

    listItem.appendChild(button);

    ul.appendChild(listItem);
  }

  function loadList() {
    return fetch(fetchURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      });
  }

  function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        pokemon.imgUrl = json.sprites.front_default;
        pokemon.height = json.height;
        return pokemon;
      });
  }

  function showModal(pokemon) {
    let modalContainer = document.querySelector("#modal-container");

    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;

    let heightElement = document.createElement("p");
    heightElement.innerText = `height: ${pokemon.height}`;

    let imgElement = document.createElement("img");
    imgElement.src = pokemon.imgUrl;

    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector('#modal-container');
      if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
        hideModal();  
      }
    });

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(imgElement);

    modalContainer.appendChild(modal);

    modalContainer.classList.add('is-visible');

    modalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
