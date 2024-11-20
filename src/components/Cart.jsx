import React, { useState } from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Q{item.price}
            <button onClick={() => removeFromCart(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h3>Total: Q{total}</h3>
      {cartItems.length > 0 && !paymentSuccess && (
        <button onClick={handlePayment}>Realizar Pago</button>
      )}
      {paymentSuccess && (
        <div className="invoice">
          <h3>Factura</h3>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - Q{item.price}
              </li>
            ))}
          </ul>
          <h3>Total Pagado: Q{total}</h3>
          <p>Gracias por tu compra.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
