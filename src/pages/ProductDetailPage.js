import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import product1 from '../img/product1.jpeg';
import producto2 from '../img/producto2.jpeg';
import producto3 from '../img/producto3.jpeg';
import producto4 from '../img/producto4.jpeg';
import producto5 from '../img/producto5.jpeg';

const products = [
  { id: '1', name: 'Cubo Verde', price: 29.99, image: product1,  category: 'Juguetes', dimensions: '10x10x10 cm', weight: '200g', material: 'Plástico' },
  { id: '2', name: 'Cubo Amarillo', price: 39.99, image: producto2,  category: 'Juguetes', dimensions: '10x10x10 cm', weight: '200g', material: 'Plástico' },
  { id: '3', name: 'Cubo Rojo', price: 49.99, image: producto3,  category: 'Juguetes', dimensions: '10x10x10 cm', weight: '200g', material: 'Plástico' },
  { id: '4', name: 'Cubo Azul', price: 59.99, image: producto4,  category: 'Juguetes', dimensions: '10x10x10 cm', weight: '200g', material: 'Plástico' },
  { id: '5', name: 'Cubo Cobre', price: 69.99, image: producto5,  category: 'Decoración', dimensions: '10x10x10 cm', weight: '250g', material: 'Metal' }
];

function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <>
        <Header />
        <div >
          <br />
          <h1 className="text-2xl font-bold mb-2">Producto no encontrado</h1>
          <br />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => {
              navigate('/');
            }}
          >
            Regresar
          </button>
          
        </div>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-center">
            <img src={product.image} alt={product.name} className="w-64 h-64 object-cover mb-4" />
          </div>
          <h1 className="text-3xl font-bold mb-2 flex justify-center items-center" >{product.name}</h1>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-lg mb-2"><strong>Categoria: </strong>{product.category}</p>
              <p className="text-lg mb-2"><strong>Dimensiones: </strong>{product.dimensions}</p>
            </div>
            <div>
              <p className="text-lg mb-2"><strong>Peso: </strong>{product.weight}</p>
              <p className="text-lg mb-2"><strong>Material: </strong>{product.material}</p>
            </div>
          </div>
          <p className="text-xl font-semibold mb-4 flex justify-center items-center">${product.price}</p>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={() => {
              navigate('/');
            }}
          >
            Regresar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailPage;