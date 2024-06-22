import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 5 && /\S+@\S+\.\S+/.test(email)) {
      setSubmitted(true);
      setError('');
    } else {
      setError('Por favor verifique su información nuevamente');
    }
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
      ) : (
        <p>Gracias {name}, te contactaremos cuando antes vía mail</p>
      )}
    </div>
  );
}

export default Form;
