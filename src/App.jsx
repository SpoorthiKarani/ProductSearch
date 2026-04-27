import { useState, useMemo, useEffect } from 'react';
import './App.css';

import { ProductList } from './ProductList.jsx';
import { useProducts } from './useProducts.jsx';
import { SearchProduct, SortBy, FilterBy } from './SearchProduct.jsx';

function App() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState('all')

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = useMemo(() => {
    let result = products || [];
    const matchesSearchProducts = (product) => {
      return product?.title?.toLowerCase().includes(debouncedSearch?.toLowerCase());
    };

    const filtered = products?.filter(matchesSearchProducts);

    if (category !== "all") {
    result = filtered.filter(product => product.category === category);
  }


    return [...result]?.sort((a, b) => {
      switch (sortBy) {
        case 'priceLowHigh':
          return a.price - b.price;
        case 'priceHighLow':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [products, sortBy, debouncedSearch, category]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Product Search</h1>
      <div className='header'>
        <SearchProduct search={search} setSearch={setSearch} />
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <FilterBy products={filteredProducts} category={category} setCategory={setCategory}/>
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App
