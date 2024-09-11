import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard.jsx';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data1.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default App;
