import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context';

function Card({ dentist }) {
  const { state, dispatch } = useContext(GlobalContext);
  const [isFav, setIsFav] = useState(state.favs.some(fav => fav.id === dentist.id));
  const [message, setMessage] = useState('');

  const addFav = () => {
    if (!isFav) {
      dispatch({ type: 'ADD_FAV', payload: dentist });
      setIsFav(true);
      setMessage(`${dentist.name} ha sido agregado a favoritos.`);
      setTimeout(() => setMessage(''), 3000); // Oculta el mensaje después de 3 segundos
    }
  };

  const removeFav = () => {
    if (isFav) {
      dispatch({ type: 'REMOVE_FAV', payload: dentist });
      setIsFav(false);
      setMessage(`${dentist.name} ha sido eliminado de favoritos.`);
      setTimeout(() => setMessage(''), 3000); // Oculta el mensaje después de 3 segundos
    }
  };

  return (
    <div className="dentist-card">
      <img src="/images/doctor.jpg" alt="Doctor" className="doctor-image" />
      <h2>{dentist.name}</h2>
      <p>{dentist.username}</p>
      <button onClick={isFav ? removeFav : addFav}>
        {isFav ? 'Quitar de Favoritos' : 'Agregar a Favoritos'}
      </button>
      <Link to={`/dentist/${dentist.id}`}>Ver Detalles</Link>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Card;
