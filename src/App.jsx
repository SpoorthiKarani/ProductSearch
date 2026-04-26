import { useState, useMemo, useEffect } from 'react';
import './App.css';

import { ProductList } from './ProductList.jsx';
import { useProducts } from './useProducts.jsx';
import { SearchProduct, SortBy } from './SearchProduct.jsx';

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = useMemo(() => {
    const matchesSearchProducts = (product) => {
      return product?.title?.toLowerCase().includes(debouncedSearch?.toLowerCase());
    };

    const filtered = products?.filter(matchesSearchProducts);

    return [...filtered]?.sort((a, b) => {
      switch (sortBy) {
        case 'priceLowHigh':
          return a.price - b.price;
        case 'priceHighLow':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [products, sortBy, debouncedSearch]);

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
