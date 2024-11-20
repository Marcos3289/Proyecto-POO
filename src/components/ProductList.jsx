import React, { useState } from "react";
import productsData from "../products";
import AddProductForm from "./AddProductForm";
import UpdateProductForm from "./UpdateProductForm";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState(productsData);
  const [category, setCategory] = useState("Todas");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const filteredProducts = category === "Todas"
    ? products
    : products.filter((product) => product.category === category);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    setIsAdding(false);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div className="category-buttons">
        <button onClick={() => setCategory("Todas")}>Todas</button>
        <button onClick={() => setCategory("Electrónica")}>Electrónica</button>
        <button onClick={() => setCategory("Muebles")}>Muebles</button>
        <button onClick={() => setCategory("Libros")}>Libros</button>
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
            <div className="product-price">Q{product.price}</div>
            <div className="product-buttons">
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Añadir al carrito
              </button>
              <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
              <button className="update-btn" onClick={() => setSelectedProduct(product)}>
                Actualizar
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="add-product-btn" onClick={() => setIsAdding(true)}>
        Añadir Producto
      </button>

      {isAdding && (
        <AddProductForm onAddProduct={handleAddProduct} />
      )}

      {selectedProduct && (
        <UpdateProductForm
          product={selectedProduct}
          onUpdateProduct={handleUpdateProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
