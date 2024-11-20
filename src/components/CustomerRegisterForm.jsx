import React, { useState } from 'react';
import './CustomerRegisterForm.css';

const CustomerRegisterForm = ({ onAddCustomer }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCustomer = {
      id: Date.now(),
      name,
      surname,
      age,
      email,
      purchases: [],
    };
    onAddCustomer(newCustomer);
    setName('');
    setSurname('');
    setAge('');
    setEmail('');
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <h2>Formulario de Clientes</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Apellido"
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">+ Agregar Usuario</button>
    </form>
  );
};

export default CustomerRegisterForm;
