const globalReducer = (state, action) => {
    switch (action.type) {
      case 'SET_THEME':
        return { ...state, theme: action.payload };
      case 'SET_DENTISTS':
        return { ...state, dentists: action.payload };
      case 'ADD_FAV':
        if (state.favs.some(fav => fav.id === action.payload.id)) {
          return state; // Si el dentista ya está en favoritos, no hacer nada
        }
        const updatedFavs = [...state.favs, action.payload];
        localStorage.setItem('favs', JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
      case 'REMOVE_FAV':
        const filteredFavs = state.favs.filter(fav => fav.id !== action.payload.id);
        localStorage.setItem('favs', JSON.stringify(filteredFavs));
        return { ...state, favs: filteredFavs };
      default:
        return state;
    }
  };
  
  export default globalReducer;
  
  