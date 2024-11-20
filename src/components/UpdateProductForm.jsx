import React, { useState } from 'react';
import './ProductForm.css';

const UpdateProductForm = ({ product, onUpdateProduct, onClose }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [image, setImage] = useState(product.image);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      name,
      price,
      category,
      image,
    };
    onUpdateProduct(updatedProduct);
    onClose();
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Actualizar Producto</h2>
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
      <button type="submit">Actualizar Producto</button>
      <button type="button" onClick={onClose}>Cancelar</button>
    </form>
  );
};

export default UpdateProductForm;
