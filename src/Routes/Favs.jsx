import React, { useContext } from 'react';
import { GlobalContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useContext(GlobalContext);

  return (
    <div className="dentist-grid">
      {state.favs.map(dentist => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Favs;
