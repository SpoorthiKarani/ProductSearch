import { ProductList } from './ProductList.jsx';  
import { useProducts } from './useProducts.jsx';
import { SearchProduct } from './SearchProduct.jsx';

function App() {
  const { products, loading, error } = useProducts();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Product Search</h1>
      <SearchProduct/>
      <ProductList products={products} />
    </div>
  );
}

export default App
