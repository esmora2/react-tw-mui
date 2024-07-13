import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import product1 from '../img/product1.jpeg';
import producto2 from '../img/producto2.jpeg';
import producto3 from '../img/producto3.jpeg';
import producto4 from '../img/producto4.jpeg';
import producto5 from '../img/producto5.jpeg';

const products = [
  { id: '1', name: 'Cubo Verde', price: 29.99, image: product1 },
  { id: '2', name: 'Cubo Amarillo', price: 39.99, image: producto2 },
  { id: '3', name: 'Cubo Rojo', price: 49.99, image: producto3 },
  { id: '4', name: 'Cubo Azul', price: 59.99, image: producto4 },
  { id: '5', name: 'Cubo Cobre', price: 69.99, image: producto5 },
];

function HomePage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
