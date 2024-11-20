import React, { useState } from 'react';
import './CustomerSearch.css';

const CustomerSearch = ({ customers, onSelectCustomer }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.surname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="customer-search">
      <h2>Buscar Clientes</h2>
      <input
        type="text"
        placeholder="Nombre, Apellido o Correo Electrónico"
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredCustomers.map(customer => (
          <li key={customer.id} onClick={() => onSelectCustomer(customer)}>
            {customer.name} {customer.surname} - {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerSearch;
