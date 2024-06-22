import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_DENTISTS', payload: data }));
  }, [dispatch]);

  return (
    <div className="dentist-grid">
      {state.dentists.map(dentist => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Home;
