import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import CustomerRegisterForm from './components/CustomerRegisterForm';
import CustomerPurchaseHistory from './components/CustomerPurchaseHistory';
import CustomerSearch from './components/CustomerSearch';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleLogin = (username, password) => {
    const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
      setIsAuthenticated(true);
    } else {
      alert('Credenciales incorrectas o usuario no registrado');
    }
  };

  const handleRegister = () => {
    setIsRegistering(true);
  };

  const handleRegistrationComplete = (status) => {
    if (status) {
      setIsRegistering(false);
      alert('Registro exitoso. Por favor, inicie sesión.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    if (selectedCustomer) {
      setSelectedCustomer({
        ...selectedCustomer,
        purchases: [...selectedCustomer.purchases, product],
      });
    }
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleAddCustomer = (customer) => {
    setCustomers([...customers, customer]);
  };

  const handleSelectCustomer = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <header>
            <h1>Tienda Electrónica</h1>
          </header>
          <div className="content">
            <div className="catalog">
              <ProductList addToCart={addToCart} />
              <CustomerRegisterForm onAddCustomer={handleAddCustomer} />
              <CustomerSearch customers={customers} onSelectCustomer={handleSelectCustomer} />
            </div>
            <div className="cart">
              <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              {selectedCustomer && (
                <CustomerPurchaseHistory customer={selectedCustomer} />
              )}
            </div>
          </div>
          <footer>
            <button onClick={handleLogout}>Cerrar sesión</button>
          </footer>
        </div>
      ) : isRegistering ? (
        <Register onRegister={handleRegistrationComplete} />
      ) : (
        <div className="login-register">
          <Login onLogin={handleLogin} />
          <button className="register-button" onClick={handleRegister}>Registrarse</button>
        </div>
      )}
    </div>
  );
}

export default App;
