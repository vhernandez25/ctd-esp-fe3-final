import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { GlobalContext } from '../Components/utils/global.context';

function Detail() {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setDentist(response.data);
      });
  }, [id]);

  if (!dentist) return <div>Loading...</div>;

  return (
    <div className="detail">
      <h1>{dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
}

export default Detail;
