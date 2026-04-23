import { useState } from 'react';
import './App.css';

import { ProductList } from './ProductList.jsx';
import { useProducts } from './useProducts.jsx';
import { SearchProduct, SortBy } from './SearchProduct.jsx';

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');

  const matchesSearchProducts = (product) => {
    return product?.title?.toLowerCase().includes(search?.toLowerCase());
  };

  const filteredProducts = products?.filter(matchesSearchProducts);

  filteredProducts?.sort((a, b) => {
    switch (sortBy) {
      case 'priceLowHigh':
        return a.price - b.price;
      case 'priceHighLow':
        return b.price - a.price;   
      default:
        return 0;  
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Product Search</h1>
      <div className='header'>
        <SearchProduct search={search} setSearch={setSearch} />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App
