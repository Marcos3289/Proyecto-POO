import React from 'react';
import './CustomerPurchaseHistory.css';

const CustomerPurchaseHistory = ({ customer }) => {
  return (
    <div className="customer-history">
      <h2>Historial de Compras de {customer.name}</h2>
      <ul>
        {customer.purchases.length === 0 ? (
          <li>No hay compras registradas.</li>
        ) : (
          customer.purchases.map((purchase, index) => (
            <li key={index}>
              {purchase.name} - Q{purchase.price}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CustomerPurchaseHistory;
