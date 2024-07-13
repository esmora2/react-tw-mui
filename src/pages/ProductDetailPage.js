import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import product1 from '../img/product1.jpeg';
import producto2 from '../img/producto2.jpeg';
import producto3 from '../img/producto3.jpeg';
import producto4 from '../img/producto4.jpeg';
import producto5 from '../img/producto5.jpeg';

const products = [
  { id: '1', name: 'Cubo Verde', price: 29.99, image: product1, description: 'Poliedro de color Verde' },
  { id: '2', name: 'Cubo Amarillo', price: 39.99, image: producto2, description: 'Poliedro de color Amarillo' },
  { id: '3', name: 'Cubo Rojo', price: 49.99, image: producto3, description: 'Poliedro de color Rojo' },
  { id: '4', name: 'Cubo Azul', price: 59.99, image: producto4, description: 'Poliedro de color Azul' },
  { id: '5', name: 'Cubo Cobre', price: 69.99, image: producto5, description: 'Poliedro de Cobre' }
];

function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <div className="p-4">
          <h1>Product not found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-lg mb-2">{product.description}</p>
          <p className="text-xl font-semibold">${product.price}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;
