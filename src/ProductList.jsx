import { ProductCard } from "./ProductCard";
import './ProductList.css';

export const ProductList = ({ products }) => {
    if (!products?.length) return <p>No products found</p>;

    return (
        <div className="product-list">
            {products?.map(product => (
                <ProductCard key={product?.id} image={product.image} title={product.title} price={product.price} rating={product.rating} />
            ))}
        </div>
    );
};