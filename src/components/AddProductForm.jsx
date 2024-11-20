import React, { useState } from 'react';
import './ProductForm.css';

const AddProductForm = ({ onAddProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), // Generar un ID único
      name,
      price,
      category,
      image,
    };
    onAddProduct(newProduct);
    setName('');
    setPrice('');
    setCategory('');
    setImage('');
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Añadir Producto</h2>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Categoría"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="URL de la imagen"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        required
      />
      <button type="submit">Añadir Producto</button>
    </form>
  );
};

export default AddProductForm;
