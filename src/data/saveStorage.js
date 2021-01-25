const localStorageSave = (id, remove = true) => {
  const pokemonsFavorite = [];
  if (JSON.parse(localStorage.getItem('pokemonsFavorite')) === null) {
    pokemonsFavorite.push(id);
    localStorage.setItem('pokemonsFavorite', JSON.stringify(pokemonsFavorite));
  } else {
    let localItens = JSON.parse(localStorage.getItem('pokemonsFavorite'));
    if (!localItens.includes(id)) {
      localItens.push(id);
      localStorage.setItem('pokemonsFavorite', JSON.stringify(localItens));
    } else if (!remove) {
      const result = localItens.filter((ele) => ele !== id);
      localStorage.setItem('pokemonsFavorite', JSON.stringify(result));
    }
  }
};

const localStorageLoad = () => {
  let localItens = [];
  if (typeof localStorage !== 'undefined') {
    if (localStorage.length > 0) {
      localItens = JSON.parse(localStorage.getItem('pokemonsFavorite'));
    } else {
      console.log('No local');
    }
  } else {
    alert('LocalStorage is not available!!');
  }
  return localItens;
};

export { localStorageSave, localStorageLoad };
